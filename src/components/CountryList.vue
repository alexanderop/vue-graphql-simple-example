<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const COUNTRIES = gql`
  query AllCountries {
    countries {
      code
      name
      emoji
    }
  }
`

const { result, loading, error } = useQuery(COUNTRIES)
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold mb-4">🌎 Countries (GraphQL)</h1>

    <p v-if="loading">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error.message }}</p>

    <ul v-else class="grid gap-1">
      <li v-for="c in result?.countries" :key="c.code">
        {{ c.emoji }} {{ c.name }}
      </li>
    </ul>
  </section>
</template> 