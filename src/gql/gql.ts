/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment CountryBasicInfo on Country {\n    code\n    name\n    emoji\n    capital\n  }\n": typeof types.CountryBasicInfoFragmentDoc,
    "\n  fragment ContinentSummary_ContinentFragment on Continent {\n    code\n    name\n  }\n": typeof types.ContinentSummary_ContinentFragmentFragmentDoc,
    "\n  fragment ContinentDetail_ContinentFragment on Continent {\n    ...ContinentSummary_ContinentFragment\n    countries {\n      ...CountryBasicInfo\n      languages {\n        code\n        name\n      }\n    }\n  }\n": typeof types.ContinentDetail_ContinentFragmentFragmentDoc,
    "\n  query ContinentsWithDetails($includeDetails: Boolean!) {\n    continents {\n      ...ContinentSummary_ContinentFragment\n      ...ContinentDetail_ContinentFragment @include(if: $includeDetails)\n    }\n  }\n": typeof types.ContinentsWithDetailsDocument,
    "\n  fragment CountryCard_CountryFragment on Country {\n    code\n    name\n    emoji\n    capital\n    phone\n    currency\n  }\n": typeof types.CountryCard_CountryFragmentFragmentDoc,
    "\n  query AllCountries2 {\n    countries {\n      ...CountryBasicInfo\n    }\n  }\n": typeof types.AllCountries2Document,
    "\n  query CountriesWithDetails {\n    countries {\n      code\n      ...CountryCard_CountryFragment\n    }\n  }\n": typeof types.CountriesWithDetailsDocument,
    "\n  fragment LanguageItem_LanguageFragment on Language {\n    code\n    name\n    native\n    rtl\n  }\n": typeof types.LanguageItem_LanguageFragmentFragmentDoc,
    "\n  fragment CountryWithLanguages_CountryFragment on Country {\n    code\n    name\n    emoji\n    languages {\n      ...LanguageItem_LanguageFragment\n    }\n  }\n": typeof types.CountryWithLanguages_CountryFragmentFragmentDoc,
    "\n  query CountryWithLanguages($code: ID!) {\n    country(code: $code) {\n      ...CountryWithLanguages_CountryFragment\n    }\n  }\n": typeof types.CountryWithLanguagesDocument,
    "query AllCountries {\n  countries {\n    ...CountryBasicInfo\n  }\n}": typeof types.AllCountriesDocument,
    "fragment CountryBasicInfo on Country {\n  code\n  name\n  emoji\n  capital\n}": typeof types.CountryBasicInfoFragmentDoc,
    "fragment CountryDetails on Country {\n  ...CountryBasicInfo\n  phone\n  currency\n  continent {\n    name\n  }\n}": typeof types.CountryDetailsFragmentDoc,
    "fragment LanguageInfo on Language {\n  code\n  name\n  native\n  rtl\n}": typeof types.LanguageInfoFragmentDoc,
};
const documents: Documents = {
    "\n  fragment CountryBasicInfo on Country {\n    code\n    name\n    emoji\n    capital\n  }\n": types.CountryBasicInfoFragmentDoc,
    "\n  fragment ContinentSummary_ContinentFragment on Continent {\n    code\n    name\n  }\n": types.ContinentSummary_ContinentFragmentFragmentDoc,
    "\n  fragment ContinentDetail_ContinentFragment on Continent {\n    ...ContinentSummary_ContinentFragment\n    countries {\n      ...CountryBasicInfo\n      languages {\n        code\n        name\n      }\n    }\n  }\n": types.ContinentDetail_ContinentFragmentFragmentDoc,
    "\n  query ContinentsWithDetails($includeDetails: Boolean!) {\n    continents {\n      ...ContinentSummary_ContinentFragment\n      ...ContinentDetail_ContinentFragment @include(if: $includeDetails)\n    }\n  }\n": types.ContinentsWithDetailsDocument,
    "\n  fragment CountryCard_CountryFragment on Country {\n    code\n    name\n    emoji\n    capital\n    phone\n    currency\n  }\n": types.CountryCard_CountryFragmentFragmentDoc,
    "\n  query AllCountries2 {\n    countries {\n      ...CountryBasicInfo\n    }\n  }\n": types.AllCountries2Document,
    "\n  query CountriesWithDetails {\n    countries {\n      code\n      ...CountryCard_CountryFragment\n    }\n  }\n": types.CountriesWithDetailsDocument,
    "\n  fragment LanguageItem_LanguageFragment on Language {\n    code\n    name\n    native\n    rtl\n  }\n": types.LanguageItem_LanguageFragmentFragmentDoc,
    "\n  fragment CountryWithLanguages_CountryFragment on Country {\n    code\n    name\n    emoji\n    languages {\n      ...LanguageItem_LanguageFragment\n    }\n  }\n": types.CountryWithLanguages_CountryFragmentFragmentDoc,
    "\n  query CountryWithLanguages($code: ID!) {\n    country(code: $code) {\n      ...CountryWithLanguages_CountryFragment\n    }\n  }\n": types.CountryWithLanguagesDocument,
    "query AllCountries {\n  countries {\n    ...CountryBasicInfo\n  }\n}": types.AllCountriesDocument,
    "fragment CountryBasicInfo on Country {\n  code\n  name\n  emoji\n  capital\n}": types.CountryBasicInfoFragmentDoc,
    "fragment CountryDetails on Country {\n  ...CountryBasicInfo\n  phone\n  currency\n  continent {\n    name\n  }\n}": types.CountryDetailsFragmentDoc,
    "fragment LanguageInfo on Language {\n  code\n  name\n  native\n  rtl\n}": types.LanguageInfoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryBasicInfo on Country {\n    code\n    name\n    emoji\n    capital\n  }\n"): (typeof documents)["\n  fragment CountryBasicInfo on Country {\n    code\n    name\n    emoji\n    capital\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContinentSummary_ContinentFragment on Continent {\n    code\n    name\n  }\n"): (typeof documents)["\n  fragment ContinentSummary_ContinentFragment on Continent {\n    code\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContinentDetail_ContinentFragment on Continent {\n    ...ContinentSummary_ContinentFragment\n    countries {\n      ...CountryBasicInfo\n      languages {\n        code\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ContinentDetail_ContinentFragment on Continent {\n    ...ContinentSummary_ContinentFragment\n    countries {\n      ...CountryBasicInfo\n      languages {\n        code\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContinentsWithDetails($includeDetails: Boolean!) {\n    continents {\n      ...ContinentSummary_ContinentFragment\n      ...ContinentDetail_ContinentFragment @include(if: $includeDetails)\n    }\n  }\n"): (typeof documents)["\n  query ContinentsWithDetails($includeDetails: Boolean!) {\n    continents {\n      ...ContinentSummary_ContinentFragment\n      ...ContinentDetail_ContinentFragment @include(if: $includeDetails)\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryCard_CountryFragment on Country {\n    code\n    name\n    emoji\n    capital\n    phone\n    currency\n  }\n"): (typeof documents)["\n  fragment CountryCard_CountryFragment on Country {\n    code\n    name\n    emoji\n    capital\n    phone\n    currency\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCountries2 {\n    countries {\n      ...CountryBasicInfo\n    }\n  }\n"): (typeof documents)["\n  query AllCountries2 {\n    countries {\n      ...CountryBasicInfo\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CountriesWithDetails {\n    countries {\n      code\n      ...CountryCard_CountryFragment\n    }\n  }\n"): (typeof documents)["\n  query CountriesWithDetails {\n    countries {\n      code\n      ...CountryCard_CountryFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LanguageItem_LanguageFragment on Language {\n    code\n    name\n    native\n    rtl\n  }\n"): (typeof documents)["\n  fragment LanguageItem_LanguageFragment on Language {\n    code\n    name\n    native\n    rtl\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryWithLanguages_CountryFragment on Country {\n    code\n    name\n    emoji\n    languages {\n      ...LanguageItem_LanguageFragment\n    }\n  }\n"): (typeof documents)["\n  fragment CountryWithLanguages_CountryFragment on Country {\n    code\n    name\n    emoji\n    languages {\n      ...LanguageItem_LanguageFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CountryWithLanguages($code: ID!) {\n    country(code: $code) {\n      ...CountryWithLanguages_CountryFragment\n    }\n  }\n"): (typeof documents)["\n  query CountryWithLanguages($code: ID!) {\n    country(code: $code) {\n      ...CountryWithLanguages_CountryFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllCountries {\n  countries {\n    ...CountryBasicInfo\n  }\n}"): (typeof documents)["query AllCountries {\n  countries {\n    ...CountryBasicInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CountryBasicInfo on Country {\n  code\n  name\n  emoji\n  capital\n}"): (typeof documents)["fragment CountryBasicInfo on Country {\n  code\n  name\n  emoji\n  capital\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CountryDetails on Country {\n  ...CountryBasicInfo\n  phone\n  currency\n  continent {\n    name\n  }\n}"): (typeof documents)["fragment CountryDetails on Country {\n  ...CountryBasicInfo\n  phone\n  currency\n  continent {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LanguageInfo on Language {\n  code\n  name\n  native\n  rtl\n}"): (typeof documents)["fragment LanguageInfo on Language {\n  code\n  name\n  native\n  rtl\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;