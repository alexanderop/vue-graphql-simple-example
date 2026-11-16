import type { Component } from "vue";
import { render } from "vitest-browser-vue";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { API_URL } from "./worker";

export function renderWithApollo(component: Component) {
  const client = new ApolloClient({
    link: new HttpLink({ uri: API_URL }),
    cache: new InMemoryCache(),
  });

  return render(component, {
    global: { provide: { [DefaultApolloClient]: client } },
  });
}
