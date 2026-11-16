import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/graphql",
  documents: ["src/**/*.vue", "src/queries/**/*.graphql"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
    "src/gql/schema.ts": {
      plugins: ["typescript"],
      config: { useTypeImports: true, avoidOptionals: true },
    },
    "src/gql/mocks.ts": {
      plugins: [
        {
          "typescript-mock-data": {
            typesFile: "./schema.ts",
            useTypeImports: true,
            addTypename: true,
            terminateCircularRelationships: true,
          },
        },
      ],
    },
  },
};

export default config;
