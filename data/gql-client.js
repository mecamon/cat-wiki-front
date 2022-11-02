import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : 'https://catapi.meca.dev/';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
});

export default client;
