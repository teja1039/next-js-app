import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

const CHARACTER_QUERY = gql`
  query character($id: ID!) {
    character(id: $id) {
      status
      type
      image
      name
      location {
        name
        id
      }
      gender
      species
      id
      origin {
        name
      }
    }
  }
`;

export const getCharacterById = async ({ id }) => {
    const client = apolloClient();

  const { data } = await client.query({
    query: CHARACTER_QUERY,
    variables: {
      id,
    },
    notifyOnNetworkStatusChange: true,
  });

  return data;
};