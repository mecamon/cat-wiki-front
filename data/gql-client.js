import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri =
  process.env.NODE_ENV === "development"
    ? "https://catapi.meca.dev/"
    : "https://catapi.meca.dev/";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
