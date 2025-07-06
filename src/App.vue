<script setup lang="ts">
import CountryList from './components/CountryList.vue'
import CountryList2 from './components/CountryList2.vue'
import CountryListWithCards from './components/CountryListWithCards.vue'
import CountryWithLanguages from './components/CountryWithLanguages.vue'
import FragmentDocumentation from './components/FragmentDocumentation.vue'
import ContinentExplorer from './components/ContinentExplorer.vue'
</script>

<template>
  <div class="container mx-auto p-6 space-y-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold mb-2">Vue 3 + GraphQL Fragments Demo</h1>
      <p class="text-gray-600">
        Demonstrating fragment composition, colocation, and masking patterns
      </p>
    </header>
    
    <CountryList />
    
    <hr class="border-gray-300" />
    
    <CountryList2 />
    
    <hr class="border-gray-300" />
    
    <CountryListWithCards />
    
    <hr class="border-gray-300" />
    
    <CountryWithLanguages />
    
    <hr class="border-gray-300" />
    
    <ContinentExplorer />
    
    <hr class="border-gray-300" />
    
    <FragmentDocumentation />
  </div>
</template>
