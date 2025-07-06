<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { AllCountriesDocument } from '../gql/graphql'
import { computed } from 'vue'
import { graphql } from '../gql'
import { useFragment } from '../gql/fragment-masking'

// Define the fragment to unmask
const CountryBasicInfoFragment = graphql(`
  fragment CountryBasicInfo on Country {
    code
    name
    emoji
    capital
  }
`)

const { result, loading, error } = useQuery(AllCountriesDocument)
const countries = computed(() => 
  result.value?.countries.map(country => 
    useFragment(CountryBasicInfoFragment, country)
  ) || []
)
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold mb-4">🌎 Countries (GraphQL)</h1>

    <p v-if="loading">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error.message }}</p>

    <ul v-else class="grid gap-1">
      <li v-for="c in countries" :key="c.code">
        {{ c.emoji }} {{ c.name }}
      </li>
    </ul>
  </section>
</template> 