import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloCon = new ApolloClient({
uri: 'http://localhost:1337/graphql',
cache: new InMemoryCache(),
});