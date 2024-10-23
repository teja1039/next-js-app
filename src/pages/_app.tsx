import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={apolloClient()}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
