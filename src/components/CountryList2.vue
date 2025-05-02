<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import { graphql } from '../gql'

const COUNTRIES_QUERY = graphql(`
  query AllCountries {
    countries {
      code
      name
      emoji
    }
  }
`)

const { result, loading, error } = useQuery(COUNTRIES_QUERY)
const countries = computed(() => result.value?.countries)
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold mb-4">🌎 Countries (GraphQL, Inline Query)</h1>

    <p v-if="loading">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error.message }}</p>

    <ul v-else class="grid gap-1">
      <li v-for="c in countries" :key="c.code">
        {{ c.emoji }} {{ c.name }}
      </li>
    </ul>
  </section>
</template> 