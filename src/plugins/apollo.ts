import { DefaultApolloClient } from "@vue/apollo-composable";
import type { App } from "vue";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
  // You should use an environment variable here!
  uri: 'https://countries.trevorblades.com/graphql'
})

const cache = new InMemoryCache()

// Create the apollo client instance
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

// Create the Vue plugin
export const apolloPlugin = {
  install(app: App) {
    // Provide the client to the entire app
    app.provide(DefaultApolloClient, apolloClient);
  },
}; 