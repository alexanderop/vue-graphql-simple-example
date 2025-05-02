import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://countries.trevorblades.com/graphql',
  // Include both .vue and .graphql files so codegen validates queries in SFCs and standalone .graphql files.
  // This ensures invalid fields in .graphql queries (like code2) are caught during generation.
  documents: ['src/**/*.vue', 'src/queries/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client', // Use the client preset for best DX in frontend apps
      config: {
        useTypeImports: true // Use 'import type' for generated types
      }
    }
  }
}

export default config 