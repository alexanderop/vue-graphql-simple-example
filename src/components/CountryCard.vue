<script setup lang="ts">
import { graphql } from '../gql'
import { type FragmentType, useFragment } from '../gql/fragment-masking'
import { computed } from 'vue'

// Define the fragment for this component's data requirements
const CountryCard_CountryFragment = graphql(`
  fragment CountryCard_CountryFragment on Country {
    code
    name
    emoji
    capital
    phone
    currency
  }
`)

// Define props with FragmentType for fragment masking
interface Props {
  country: FragmentType<typeof CountryCard_CountryFragment>
}

const props = defineProps<Props>()

// Unmask the fragment data - the component can only access fields defined in its fragment
// Wrapped in computed for reactivity when props change
const country = computed(() => useFragment(CountryCard_CountryFragment, props.country))
</script>

<template>
  <div class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-2xl">{{ country.emoji }}</span>
      <h3 class="text-lg font-semibold">{{ country.name }}</h3>
    </div>
    
    <dl class="space-y-1 text-sm">
      <div class="flex gap-2">
        <dt class="font-medium text-gray-600">Code:</dt>
        <dd>{{ country.code }}</dd>
      </div>
      
      <div v-if="country.capital" class="flex gap-2">
        <dt class="font-medium text-gray-600">Capital:</dt>
        <dd>{{ country.capital }}</dd>
      </div>
      
      <div v-if="country.phone" class="flex gap-2">
        <dt class="font-medium text-gray-600">Phone:</dt>
        <dd>+{{ country.phone }}</dd>
      </div>
      
      <div v-if="country.currency" class="flex gap-2">
        <dt class="font-medium text-gray-600">Currency:</dt>
        <dd>{{ country.currency }}</dd>
      </div>
    </dl>
  </div>
</template>