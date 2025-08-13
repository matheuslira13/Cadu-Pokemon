import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql.pokeapi.co/v1beta2/graphql",
  cache: new InMemoryCache(),
});
