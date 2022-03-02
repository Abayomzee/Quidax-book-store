import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://quidax-feec-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
