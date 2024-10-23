import { Character } from "@/components/characters/Character";
import { followCharacter } from "@/mutations/follow";
import { unfollowCharacter } from "@/mutations/unfollow";
import { getCharacterById } from "@/queries/characterById";
import { getCharacterIds } from "@/queries/characters";
import { getFollowedCharacterIds } from "@/queries/followedCharacters";
import { useState } from "react";

interface Props {
  character: any;
  following: boolean;
}

const CharacterPage: React.FC<Props> = ({ character, following }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [error, setError] = useState(null);

  const handleFollow = async () => {
    if (isFollowing) {
      try {
        await unfollowCharacter({ id: character.id });
        setIsFollowing(false);
      } catch (error) {
        setError(error);
      }
    } else {
      try {
        await followCharacter({ id: character.id });
        setIsFollowing(true);
      } catch (error) {
        setError(error);
      }
    }
  };

  if (error) return <div>Error : {error.message}</div>;

  return (
    <>
      <Character
        character={character}
        isFollowing={isFollowing}
        onFollow={handleFollow}
      />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { character } = await getCharacterById({id});
  const followedCharacters = await getFollowedCharacterIds();
  const following = followedCharacters.includes(id);

  return {
    props: {
      character,
      following,
    },
  };
};

export const getStaticPaths = async () => {
  const characterIdList = await getCharacterIds();

  const paths = characterIdList.map(({id}) => ({
    params: {
      id,
    },
  }));

  return { paths, fallback: "blocking" };
};

export default CharacterPage;
