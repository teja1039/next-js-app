import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
