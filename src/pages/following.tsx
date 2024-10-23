import CharacterList from "@/components/characters/CharacterList";
import { getFollowedCharacters } from "@/queries/followedCharacters";


export const getServerSideProps = async () => {
  const characters = await getFollowedCharacters();
  return {
    props: {
      characters,
    }
  }
}

export default CharacterList;