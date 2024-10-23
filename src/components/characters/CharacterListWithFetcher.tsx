import CharacterList from "@/components/characters/CharacterList";
import { useEffect, useState } from "react";

interface Props {
    getCharacters: () => Promise<any>;
}

const CharacterListWithFetcher: React.FC<Props> = ({getCharacters}) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const characters = await getCharacters();
          setCharacters(characters);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCharacters();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <CharacterList characters={characters}/>
        </>
    );
}

export default CharacterListWithFetcher;