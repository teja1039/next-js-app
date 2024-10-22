import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

const CHARACTERS_LOOKUP_QUERY = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      species
    }
  }
`;

export const getFollowedCharacters = async () => {
    const client = apolloClient();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/follow`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { storedData: followedCharacters } = await response.json();

  let result = [];

  if (followedCharacters.length) {
    const { data } = await client.query({
      query: CHARACTERS_LOOKUP_QUERY,
      variables: {
        ids: followedCharacters,
      },
    });
    result = data.charactersByIds;
  }

  return result;
}