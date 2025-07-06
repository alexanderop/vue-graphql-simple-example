<script setup lang="ts">
import { ref } from 'vue'

const examples = ref([
  {
    title: 'Fragment Definition',
    description: 'Define data requirements for a component',
    code: `const CountryCard_Fragment = graphql(\`
  fragment CountryCard_Fragment on Country {
    code
    name
    emoji
    capital
  }
\`)`
  },
  {
    title: 'Fragment Masking',
    description: 'Type-safe component props with FragmentType',
    code: `interface Props {
  country: FragmentType<typeof CountryCard_Fragment>
}

const props = defineProps<Props>()
const country = useFragment(CountryCard_Fragment, props.country)`
  },
  {
    title: 'Fragment Composition',
    description: 'Compose fragments to build complex queries',
    code: `fragment CountryDetails on Country {
  ...CountryBasicInfo
  phone
  currency
  continent {
    name
  }
}`
  },
  {
    title: 'Query with Fragments',
    description: 'Use fragments in queries for reusability',
    code: `query CountriesWithDetails {
  countries {
    code
    ...CountryCard_Fragment
  }
}`
  }
])

const benefits = [
  {
    icon: '🧩',
    title: 'Component Isolation',
    description: 'Each component declares its own data requirements'
  },
  {
    icon: '🔒',
    title: 'Type Safety',
    description: 'Fragment masking ensures components only access their declared fields'
  },
  {
    icon: '♻️',
    title: 'Reusability',
    description: 'Fragments can be reused across different queries and components'
  },
  {
    icon: '🎯',
    title: 'Colocation',
    description: 'Keep GraphQL fragments close to the components that use them'
  }
]
</script>

<template>
  <section class="space-y-8">
    <div>
      <h2 class="text-2xl font-bold mb-4">📚 GraphQL Fragments in Vue 3</h2>
      
      <div class="prose max-w-none">
        <p class="text-gray-700 mb-6">
          GraphQL fragments enable a component-driven approach to data fetching. 
          Each component declares its data requirements, and these fragments compose 
          up to form complete queries.
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-4">Key Benefits</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="benefit in benefits" 
          :key="benefit.title"
          class="flex gap-3 p-4 border rounded-lg"
        >
          <span class="text-2xl">{{ benefit.icon }}</span>
          <div>
            <h4 class="font-medium">{{ benefit.title }}</h4>
            <p class="text-sm text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-4">Code Examples</h3>
      <div class="space-y-6">
        <div 
          v-for="example in examples" 
          :key="example.title"
          class="border rounded-lg overflow-hidden"
        >
          <div class="bg-gray-50 px-4 py-2 border-b">
            <h4 class="font-medium">{{ example.title }}</h4>
            <p class="text-sm text-gray-600">{{ example.description }}</p>
          </div>
          <pre class="p-4 bg-gray-900 text-gray-100 overflow-x-auto"><code>{{ example.code }}</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
      <h4 class="font-medium mb-2">Fragment Masking Pattern</h4>
      <p class="text-sm text-gray-700">
        The <code class="bg-white px-1 py-0.5 rounded">useFragment</code> hook ensures that components 
        can only access the fields they explicitly request in their fragments. This prevents 
        tight coupling between parent and child components and makes refactoring safer.
      </p>
    </div>
  </section>
</template>