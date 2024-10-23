import { Character } from "@/components/characters/Character";
import { followCharacter } from "@/mutations/follow";
import { unfollowCharacter } from "@/mutations/unfollow";
import { getCharacterById } from "@/queries/characterById";
import { getCharacterIds } from "@/queries/characters";
import { getFollowedCharacterIds } from "@/queries/followedCharacters";
import { useEffect, useState } from "react";

interface Props {
  character: any;
  following: boolean;
}

const CharacterPage: React.FC<Props> = ({ character }) => {
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const setFollowStatus = async () => {
      try {
        const followedCharacters = await getFollowedCharacterIds();
        setIsFollowing(followedCharacters.includes(character.id));
      } catch( error ) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    setFollowStatus();
  },[])

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

  if (loading) return <div>Loading...</div>
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

  return {
    props: {
      character,
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
