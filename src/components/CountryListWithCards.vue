<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql'
import { computed } from 'vue'
import CountryCard from './CountryCard.vue'

// Query that includes the fragment needed by CountryCard
const COUNTRIES_WITH_DETAILS_QUERY = graphql(`
  query CountriesWithDetails {
    countries {
      code
      ...CountryCard_CountryFragment
    }
  }
`)

const { result, loading, error } = useQuery(COUNTRIES_WITH_DETAILS_QUERY)
const countries = computed(() => result.value?.countries || [])

// Example of trying to access a field not in our query
// This would cause a TypeScript error if uncommented:
// const firstCountryPhone = computed(() => countries.value[0]?.phone) // ❌ Error: Property 'phone' does not exist

// We can only access 'code' since that's what we selected in our query
const countryCodes = computed(() => countries.value.map(c => c.code))
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">🎴 Countries with Fragment Masking</h2>
    
    <div class="mb-4 text-sm text-gray-600">
      <p>This component demonstrates fragment masking:</p>
      <ul class="list-disc list-inside mt-2">
        <li>The parent component can only access the 'code' field it explicitly requested</li>
        <li>CountryCard manages its own data requirements through its fragment</li>
        <li>Type safety ensures we can't access fields from child fragments</li>
      </ul>
    </div>

    <p v-if="loading" class="text-gray-600">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error.message }}</p>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CountryCard 
        v-for="country in countries.slice(0, 12)" 
        :key="country.code"
        :country="country"
      />
    </div>
    
    <div v-if="countryCodes.length > 0" class="mt-6 p-4 bg-gray-100 rounded">
      <p class="text-sm font-medium mb-2">Country codes accessible in parent:</p>
      <code class="text-xs">{{ countryCodes.slice(0, 12).join(', ') }}...</code>
    </div>
  </section>
</template>