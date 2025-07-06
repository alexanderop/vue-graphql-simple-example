<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql'
import { useFragment } from '../gql/fragment-masking'
import { computed, ref } from 'vue'

// Fragment for country basic info (referenced in detail fragment)
const CountryBasicInfoFragment = graphql(`
  fragment CountryBasicInfo on Country {
    code
    name
    emoji
    capital
  }
`)

// Fragment for continent summary
const ContinentSummary_ContinentFragment = graphql(`
  fragment ContinentSummary_ContinentFragment on Continent {
    code
    name
  }
`)

// Fragment for detailed continent info with countries
const ContinentDetail_ContinentFragment = graphql(`
  fragment ContinentDetail_ContinentFragment on Continent {
    ...ContinentSummary_ContinentFragment
    countries {
      ...CountryBasicInfo
      languages {
        code
        name
      }
    }
  }
`)

// Query all continents with conditional detail loading
const CONTINENTS_QUERY = graphql(`
  query ContinentsWithDetails($includeDetails: Boolean!) {
    continents {
      ...ContinentSummary_ContinentFragment
      ...ContinentDetail_ContinentFragment @include(if: $includeDetails)
    }
  }
`)

// Component state
const includeDetails = ref(false)
const selectedContinent = ref<string | null>(null)

// Execute query
const { result, loading, error, refetch } = useQuery(CONTINENTS_QUERY, () => ({
  includeDetails: includeDetails.value
}))

const continents = computed(() => result.value?.continents || [])

// Helper to check if continent is selected
const isSelected = (code: string) => selectedContinent.value === code

// Toggle details loading
const toggleDetails = async () => {
  includeDetails.value = !includeDetails.value
  await refetch()
}

</script>

<template>
  <section class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold mb-4">🌍 Continent Explorer (Nested Fragments)</h2>
      
      <div class="flex items-center gap-4 mb-6">
        <button
          @click="toggleDetails"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {{ includeDetails ? 'Hide' : 'Load' }} Country Details
        </button>
        
        <span class="text-sm text-gray-600">
          Demonstrates @include directive with fragments
        </span>
      </div>
    </div>

    <div v-if="loading" class="text-gray-600">Loading continents…</div>
    <div v-else-if="error" class="text-red-600">{{ error.message }}</div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Continent Cards -->
      <div 
        v-for="continent in continents" 
        :key="useFragment(ContinentSummary_ContinentFragment, continent).code"
        class="border rounded-lg overflow-hidden"
        :class="{ 'ring-2 ring-blue-500': isSelected(useFragment(ContinentSummary_ContinentFragment, continent).code) }"
      >
        <!-- Summary Section (Always visible) -->
        <div 
          @click="selectedContinent = useFragment(ContinentSummary_ContinentFragment, continent).code"
          class="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <h3 class="text-lg font-semibold">
            {{ useFragment(ContinentSummary_ContinentFragment, continent).name }}
          </h3>
          <p class="text-sm text-gray-600">
            Code: {{ useFragment(ContinentSummary_ContinentFragment, continent).code }}
          </p>
        </div>
        
        <!-- Details Section (Only when includeDetails is true) -->
        <div 
          v-if="includeDetails && isSelected(useFragment(ContinentSummary_ContinentFragment, continent).code)" 
          class="border-t bg-gray-50 p-4"
        >
          <template v-if="continent">
            <div class="space-y-3">
              <h4 class="font-medium text-sm">Countries:</h4>
              <div class="space-y-2 max-h-64 overflow-y-auto">
                <div 
                  v-for="country in useFragment(ContinentDetail_ContinentFragment, continent).countries.slice(0, 5)" 
                  :key="useFragment(CountryBasicInfoFragment, country).code"
                  class="bg-white p-2 rounded border text-sm"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ useFragment(CountryBasicInfoFragment, country).emoji }}</span>
                    <span class="font-medium">{{ useFragment(CountryBasicInfoFragment, country).name }}</span>
                  </div>
                  <div v-if="country.languages.length > 0" class="mt-1 text-xs text-gray-600">
                    Languages: {{ country.languages.slice(0, 3).map(l => l.name).join(', ') }}
                    <span v-if="country.languages.length > 3">
                      +{{ country.languages.length - 3 }} more
                    </span>
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-500">
                Showing first 5 countries
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 border-l-4 border-amber-400 p-4">
      <h4 class="font-medium mb-2">Advanced Fragment Pattern</h4>
      <p class="text-sm text-gray-700 mb-2">
        This example demonstrates:
      </p>
      <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
        <li>Nested fragment composition (Continent → Countries → Languages)</li>
        <li>Conditional fragments with @include directive</li>
        <li>Fragment reuse (CountryBasicInfo used in multiple contexts)</li>
        <li>Type-safe access to deeply nested data</li>
      </ul>
    </div>
  </section>
</template>