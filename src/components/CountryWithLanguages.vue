<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql'
import { type FragmentType, useFragment } from '../gql/fragment-masking'
import { computed, ref } from 'vue'

// Define fragments inline to demonstrate colocation
const LanguageItem_LanguageFragment = graphql(`
  fragment LanguageItem_LanguageFragment on Language {
    code
    name
    native
    rtl
  }
`)

const CountryWithLanguages_CountryFragment = graphql(`
  fragment CountryWithLanguages_CountryFragment on Country {
    code
    name
    emoji
    languages {
      ...LanguageItem_LanguageFragment
    }
  }
`)

// Query that uses the fragments
const COUNTRY_WITH_LANGUAGES_QUERY = graphql(`
  query CountryWithLanguages($code: ID!) {
    country(code: $code) {
      ...CountryWithLanguages_CountryFragment
    }
  }
`)


const LanguageItem = defineComponent({
  props: {
    language: {
      type: Object as PropType<FragmentType<typeof LanguageItem_LanguageFragment>>,
      required: true
    }
  },
  setup(props) {
    const language = computed(() => useFragment(LanguageItem_LanguageFragment, props.language))
    return { language }
  },
  template: `
    <div class="flex items-center gap-2 p-2 border rounded">
      <span class="font-medium">{{ language.name }}</span>
      <span class="text-gray-600">({{ language.native }})</span>
      <span v-if="language.rtl" class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">RTL</span>
    </div>
  `
})

// Main component logic
import { defineComponent, type PropType } from 'vue'

const countryCode = ref('US')
const { result, loading, error } = useQuery(COUNTRY_WITH_LANGUAGES_QUERY, () => ({
  code: countryCode.value
}))

const country = computed(() => {
  if (!result.value?.country) return null
  return useFragment(CountryWithLanguages_CountryFragment, result.value.country)
})

// Sample country codes for the selector
const sampleCountries = [
  { code: 'US', name: 'United States' },
  { code: 'ES', name: 'Spain' },
  { code: 'JP', name: 'Japan' },
  { code: 'IN', name: 'India' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'ZA', name: 'South Africa' }
]
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">🗣️ Country Languages (Fragment Composition)</h2>
    
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">Select a country:</label>
      <select 
        v-model="countryCode" 
        class="border rounded px-3 py-2 w-64"
      >
        <option 
          v-for="c in sampleCountries" 
          :key="c.code" 
          :value="c.code"
        >
          {{ c.name }}
        </option>
      </select>
    </div>

    <div v-if="loading" class="text-gray-600">Loading…</div>
    <div v-else-if="error" class="text-red-600">{{ error.message }}</div>
    
    <div v-else-if="country" class="space-y-4">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-3xl">{{ country.emoji }}</span>
        <h3 class="text-xl font-semibold">{{ country.name }}</h3>
      </div>
      
      <div>
        <h4 class="text-lg font-medium mb-2">Languages:</h4>
        <div class="space-y-2">
          <LanguageItem 
            v-for="lang in country.languages" 
            :key="useFragment(LanguageItem_LanguageFragment, lang).code"
            :language="lang"
          />
        </div>
      </div>
    </div>
  </section>
</template>