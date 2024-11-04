import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

const CHARACTERS_LIST_QUERY = gql`
  query characters {
    characters {
      id
      name
      image
      species
    }
  }
`;

const CHARACTERS_ID_LIST_QUERY = gql`
  query characters {
    characters {
      id
    }
  }
`;

export const getCharacterIds = async () => {
  const client = apolloClient();
  const { data } = await client.query({
    query: CHARACTERS_ID_LIST_QUERY,
  });

  return data.characters;
};
export const getCharacters = async () => {
  const client = apolloClient();

  const { data } = await client.query({
    query: CHARACTERS_LIST_QUERY,
  });

  return data.characters;
};
