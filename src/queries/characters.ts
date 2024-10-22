import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

const CHARACTERS_LIST_QUERY = gql`
  query characters {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export const getCharacters = async () => {
    const client = apolloClient();

  const { data } = await client.query({
    query: CHARACTERS_LIST_QUERY,
  });

  return data;
}