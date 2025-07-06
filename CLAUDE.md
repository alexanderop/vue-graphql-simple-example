# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Run TypeScript checks and build for production
- `npm run preview` - Preview production build
- `npm run codegen` - Generate TypeScript types from GraphQL schema/queries
- `npm run codegen:watch` - Watch mode for continuous GraphQL type generation

**Important**: Always run `npm run codegen:watch` alongside `npm run dev` during development to ensure GraphQL types stay in sync.

## Architecture Overview

This is a Vue 3 + GraphQL tutorial project demonstrating modern GraphQL integration patterns:

1. **GraphQL Client**: Apollo Client v3 integrated via Vue plugin pattern in `src/plugins/apollo.ts`
2. **Type Generation**: GraphQL Code Generator automatically creates TypeScript types from schema and queries
3. **Component Pattern**: Vue 3 Composition API with `<script setup>` syntax
4. **Query Approaches**: 
   - External `.graphql` files in `src/queries/`
   - Inline queries using `graphql` template tag

## Key Technical Details

- **GraphQL Endpoint**: https://countries.trevorblades.com/graphql (Countries API)
- **Generated Types Location**: `src/gql/` (auto-generated, do not edit)
- **Vue Integration**: Apollo Client provided globally via Vue's provide/inject system
- **TypeScript**: Strict mode enabled, no unused variables allowed

## Project Structure

```
src/
├── components/      # Vue components (CountryList.vue, CountryList2.vue)
├── gql/            # Auto-generated GraphQL types (DO NOT EDIT)
├── plugins/        # Vue plugins (apollo.ts for GraphQL client setup)
├── queries/        # GraphQL query files (.graphql files)
├── App.vue         # Root component demonstrating both query approaches
└── main.ts         # Vue app initialization with Apollo plugin
```

## Working with GraphQL

When adding new GraphQL operations:
1. Write queries either in `.graphql` files or inline with `graphql` tag
2. Run codegen to generate types: `npm run codegen`
3. Import generated documents/types from `src/gql/`
4. Use `useQuery`, `useMutation`, etc. from `@vue/apollo-composable`

Example patterns are demonstrated in `CountryList.vue` (external query) and `CountryList2.vue` (inline query).

## GraphQL Fragments Pattern

This project demonstrates the Relay-inspired fragments pattern:

### Key Concepts:
1. **Fragment Colocation**: Each component defines its data requirements via fragments
2. **Fragment Masking**: Components can only access fields they explicitly request
3. **Type Safety**: Use `FragmentType<T>` for props and `useFragment()` to unmask data

### Fragment Examples:
- **Basic fragments**: `CountryBasicInfo.graphql`, `CountryDetails.graphql`
- **Fragment composition**: `CountryDetails` spreads `CountryBasicInfo`
- **Component with masking**: `CountryCard.vue` demonstrates fragment masking
- **Nested fragments**: `ContinentExplorer.vue` shows complex composition
- **Cross-relationship**: `CountryWithLanguages.vue` uses fragments across types

### Working with Fragments:
```typescript
// Define fragment in component
const MyComponent_Fragment = graphql(`
  fragment MyComponent_Fragment on Type {
    field1
    field2
  }
`)

// Type props with FragmentType
interface Props {
  data: FragmentType<typeof MyComponent_Fragment>
}

// Unmask data in component
const data = useFragment(MyComponent_Fragment, props.data)
```