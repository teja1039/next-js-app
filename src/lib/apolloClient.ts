import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

// named request
const MY_BASE_URL = "http:localhost:8080/graphql";
// const httpLink = new HttpLink({ uri: MY_BASE_URL });
// const namedLink = new ApolloLink((operation, forward) => {
//   operation.setContext(() => ({
//     uri: `${MY_BASE_URL}?${operation.operationName}`,
//   }));
//   return forward ? forward(operation) : null;
// });

const makeCreateGraphQLClient = () => {
  let graphQLInstance;
  return (): ApolloClient<any> => {
    if (!graphQLInstance) {
      graphQLInstance = new ApolloClient({
        ssrMode: true,
        uri: MY_BASE_URL,
        cache: new InMemoryCache(),
        assumeImmutableResults: true,
        connectToDevTools: true,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-first",
          },
        },
      });
    }
    return graphQLInstance;
  };
};

export default makeCreateGraphQLClient();
