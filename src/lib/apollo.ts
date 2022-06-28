import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4xxfhqc0unu01ta2l62c4ga/master',
    cache: new InMemoryCache()
})