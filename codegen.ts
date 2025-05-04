
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/graphql",
  documents: ['src/**/*.vue', 'src/queries/**/*.graphql'],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
