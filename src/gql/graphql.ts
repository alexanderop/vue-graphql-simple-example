/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CountryBasicInfoFragment = { __typename?: 'Country', code: string, name: string, emoji: string, capital?: string | null } & { ' $fragmentName'?: 'CountryBasicInfoFragment' };

export type ContinentSummary_ContinentFragmentFragment = { __typename?: 'Continent', code: string, name: string } & { ' $fragmentName'?: 'ContinentSummary_ContinentFragmentFragment' };

export type ContinentDetail_ContinentFragmentFragment = (
  { __typename?: 'Continent', countries: Array<(
    { __typename?: 'Country', languages: Array<{ __typename?: 'Language', code: string, name: string }> }
    & { ' $fragmentRefs'?: { 'CountryBasicInfoFragment': CountryBasicInfoFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'ContinentSummary_ContinentFragmentFragment': ContinentSummary_ContinentFragmentFragment } }
) & { ' $fragmentName'?: 'ContinentDetail_ContinentFragmentFragment' };

export type ContinentsWithDetailsQueryVariables = Exact<{
  includeDetails: Scalars['Boolean']['input'];
}>;


export type ContinentsWithDetailsQuery = { __typename?: 'Query', continents: Array<(
    { __typename?: 'Continent' }
    & { ' $fragmentRefs'?: { 'ContinentSummary_ContinentFragmentFragment': ContinentSummary_ContinentFragmentFragment;'ContinentDetail_ContinentFragmentFragment': ContinentDetail_ContinentFragmentFragment } }
  )> };

export type CountryCard_CountryFragmentFragment = { __typename?: 'Country', code: string, name: string, emoji: string, capital?: string | null, phone: string, currency?: string | null } & { ' $fragmentName'?: 'CountryCard_CountryFragmentFragment' };

export type AllCountries2QueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountries2Query = { __typename?: 'Query', countries: Array<(
    { __typename?: 'Country' }
    & { ' $fragmentRefs'?: { 'CountryBasicInfoFragment': CountryBasicInfoFragment } }
  )> };

export type CountriesWithDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesWithDetailsQuery = { __typename?: 'Query', countries: Array<(
    { __typename?: 'Country', code: string }
    & { ' $fragmentRefs'?: { 'CountryCard_CountryFragmentFragment': CountryCard_CountryFragmentFragment } }
  )> };

export type LanguageItem_LanguageFragmentFragment = { __typename?: 'Language', code: string, name: string, native: string, rtl: boolean } & { ' $fragmentName'?: 'LanguageItem_LanguageFragmentFragment' };

export type CountryWithLanguages_CountryFragmentFragment = { __typename?: 'Country', code: string, name: string, emoji: string, languages: Array<(
    { __typename?: 'Language' }
    & { ' $fragmentRefs'?: { 'LanguageItem_LanguageFragmentFragment': LanguageItem_LanguageFragmentFragment } }
  )> } & { ' $fragmentName'?: 'CountryWithLanguages_CountryFragmentFragment' };

export type CountryWithLanguagesQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type CountryWithLanguagesQuery = { __typename?: 'Query', country?: (
    { __typename?: 'Country' }
    & { ' $fragmentRefs'?: { 'CountryWithLanguages_CountryFragmentFragment': CountryWithLanguages_CountryFragmentFragment } }
  ) | null };

export type AllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = { __typename?: 'Query', countries: Array<(
    { __typename?: 'Country' }
    & { ' $fragmentRefs'?: { 'CountryBasicInfoFragment': CountryBasicInfoFragment } }
  )> };

export type CountryDetailsFragment = (
  { __typename?: 'Country', phone: string, currency?: string | null, continent: { __typename?: 'Continent', name: string } }
  & { ' $fragmentRefs'?: { 'CountryBasicInfoFragment': CountryBasicInfoFragment } }
) & { ' $fragmentName'?: 'CountryDetailsFragment' };

export type LanguageInfoFragment = { __typename?: 'Language', code: string, name: string, native: string, rtl: boolean } & { ' $fragmentName'?: 'LanguageInfoFragment' };

export const ContinentSummary_ContinentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Continent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ContinentSummary_ContinentFragmentFragment, unknown>;
export const CountryBasicInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]} as unknown as DocumentNode<CountryBasicInfoFragment, unknown>;
export const ContinentDetail_ContinentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContinentDetail_ContinentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Continent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryBasicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Continent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]} as unknown as DocumentNode<ContinentDetail_ContinentFragmentFragment, unknown>;
export const CountryCard_CountryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryCard_CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]} as unknown as DocumentNode<CountryCard_CountryFragmentFragment, unknown>;
export const LanguageItem_LanguageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LanguageItem_LanguageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Language"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"rtl"}}]}}]} as unknown as DocumentNode<LanguageItem_LanguageFragmentFragment, unknown>;
export const CountryWithLanguages_CountryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryWithLanguages_CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LanguageItem_LanguageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LanguageItem_LanguageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Language"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"rtl"}}]}}]} as unknown as DocumentNode<CountryWithLanguages_CountryFragmentFragment, unknown>;
export const CountryDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryBasicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"continent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]} as unknown as DocumentNode<CountryDetailsFragment, unknown>;
export const LanguageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LanguageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Language"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"rtl"}}]}}]} as unknown as DocumentNode<LanguageInfoFragment, unknown>;
export const ContinentsWithDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContinentsWithDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDetails"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContinentDetail_ContinentFragment"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDetails"}}}]}]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Continent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContinentDetail_ContinentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Continent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContinentSummary_ContinentFragment"}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryBasicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ContinentsWithDetailsQuery, ContinentsWithDetailsQueryVariables>;
export const AllCountries2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCountries2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryBasicInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]} as unknown as DocumentNode<AllCountries2Query, AllCountries2QueryVariables>;
export const CountriesWithDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountriesWithDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryCard_CountryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryCard_CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]} as unknown as DocumentNode<CountriesWithDetailsQuery, CountriesWithDetailsQueryVariables>;
export const CountryWithLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryWithLanguages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryWithLanguages_CountryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LanguageItem_LanguageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Language"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"rtl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryWithLanguages_CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LanguageItem_LanguageFragment"}}]}}]}}]} as unknown as DocumentNode<CountryWithLanguagesQuery, CountryWithLanguagesQueryVariables>;
export const AllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryBasicInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryBasicInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]} as unknown as DocumentNode<AllCountriesQuery, AllCountriesQueryVariables>;