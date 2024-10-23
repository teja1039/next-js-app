import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";

export const getStaticProps = async () => {
  const characters = await getCharacters();
  return {
    props: {
      characters
    }
  }
}

export default CharacterList;