import type { Continent, ContinentFilterInput, Country, CountryFilterInput, Language, LanguageFilterInput, Query, State, StringQueryOperatorInput, Subdivision } from './schema';

export const aContinent = (overrides?: Partial<Continent>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Continent' } & Continent => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Continent');
    return {
        __typename: 'Continent',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'e7fac54a-f717-43e0-8cb5-6cb5a8cf791a',
        countries: overrides && overrides.hasOwnProperty('countries') ? overrides.countries! : [relationshipsToOmit.has('Country') ? {} as Country : aCountry({}, relationshipsToOmit)],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'articulus',
    };
};

export const aContinentFilterInput = (overrides?: Partial<ContinentFilterInput>, _relationshipsToOmit: Set<string> = new Set()): ContinentFilterInput => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('ContinentFilterInput');
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
    };
};

export const aCountry = (overrides?: Partial<Country>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Country' } & Country => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Country');
    return {
        __typename: 'Country',
        awsRegion: overrides && overrides.hasOwnProperty('awsRegion') ? overrides.awsRegion! : 'coaegresco',
        capital: overrides && overrides.hasOwnProperty('capital') ? overrides.capital! : 'demum',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'e9a1940c-8fc8-45e9-bebc-43c32060600e',
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : relationshipsToOmit.has('Continent') ? {} as Continent : aContinent({}, relationshipsToOmit),
        currencies: overrides && overrides.hasOwnProperty('currencies') ? overrides.currencies! : ['a'],
        currency: overrides && overrides.hasOwnProperty('currency') ? overrides.currency! : 'conforto',
        emoji: overrides && overrides.hasOwnProperty('emoji') ? overrides.emoji! : 'peccatus',
        emojiU: overrides && overrides.hasOwnProperty('emojiU') ? overrides.emojiU! : 'quas',
        languages: overrides && overrides.hasOwnProperty('languages') ? overrides.languages! : [relationshipsToOmit.has('Language') ? {} as Language : aLanguage({}, relationshipsToOmit)],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'amplexus',
        native: overrides && overrides.hasOwnProperty('native') ? overrides.native! : 'stabilis',
        phone: overrides && overrides.hasOwnProperty('phone') ? overrides.phone! : 'bestia',
        phones: overrides && overrides.hasOwnProperty('phones') ? overrides.phones! : ['stips'],
        states: overrides && overrides.hasOwnProperty('states') ? overrides.states! : [relationshipsToOmit.has('State') ? {} as State : aState({}, relationshipsToOmit)],
        subdivisions: overrides && overrides.hasOwnProperty('subdivisions') ? overrides.subdivisions! : [relationshipsToOmit.has('Subdivision') ? {} as Subdivision : aSubdivision({}, relationshipsToOmit)],
    };
};

export const aCountryFilterInput = (overrides?: Partial<CountryFilterInput>, _relationshipsToOmit: Set<string> = new Set()): CountryFilterInput => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('CountryFilterInput');
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
        currency: overrides && overrides.hasOwnProperty('currency') ? overrides.currency! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
    };
};

export const aLanguage = (overrides?: Partial<Language>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Language' } & Language => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Language');
    return {
        __typename: 'Language',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : '0ff8a062-da8b-456f-ac70-48b7955f87bf',
        countries: overrides && overrides.hasOwnProperty('countries') ? overrides.countries! : [relationshipsToOmit.has('Country') ? {} as Country : aCountry({}, relationshipsToOmit)],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quae',
        native: overrides && overrides.hasOwnProperty('native') ? overrides.native! : 'temperantia',
        rtl: overrides && overrides.hasOwnProperty('rtl') ? overrides.rtl! : true,
    };
};

export const aLanguageFilterInput = (overrides?: Partial<LanguageFilterInput>, _relationshipsToOmit: Set<string> = new Set()): LanguageFilterInput => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('LanguageFilterInput');
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : relationshipsToOmit.has('StringQueryOperatorInput') ? {} as StringQueryOperatorInput : aStringQueryOperatorInput({}, relationshipsToOmit),
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Query' } & Query => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Query');
    return {
        __typename: 'Query',
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : relationshipsToOmit.has('Continent') ? {} as Continent : aContinent({}, relationshipsToOmit),
        continents: overrides && overrides.hasOwnProperty('continents') ? overrides.continents! : [relationshipsToOmit.has('Continent') ? {} as Continent : aContinent({}, relationshipsToOmit)],
        countries: overrides && overrides.hasOwnProperty('countries') ? overrides.countries! : [relationshipsToOmit.has('Country') ? {} as Country : aCountry({}, relationshipsToOmit)],
        country: overrides && overrides.hasOwnProperty('country') ? overrides.country! : relationshipsToOmit.has('Country') ? {} as Country : aCountry({}, relationshipsToOmit),
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : relationshipsToOmit.has('Language') ? {} as Language : aLanguage({}, relationshipsToOmit),
        languages: overrides && overrides.hasOwnProperty('languages') ? overrides.languages! : [relationshipsToOmit.has('Language') ? {} as Language : aLanguage({}, relationshipsToOmit)],
    };
};

export const aState = (overrides?: Partial<State>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'State' } & State => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('State');
    return {
        __typename: 'State',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'cado',
        country: overrides && overrides.hasOwnProperty('country') ? overrides.country! : relationshipsToOmit.has('Country') ? {} as Country : aCountry({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'reprehenderit',
    };
};

export const aStringQueryOperatorInput = (overrides?: Partial<StringQueryOperatorInput>, _relationshipsToOmit: Set<string> = new Set()): StringQueryOperatorInput => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('StringQueryOperatorInput');
    return {
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'aveho',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['explicabo'],
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'triumphus',
        nin: overrides && overrides.hasOwnProperty('nin') ? overrides.nin! : ['temptatio'],
        regex: overrides && overrides.hasOwnProperty('regex') ? overrides.regex! : 'cur',
    };
};

export const aSubdivision = (overrides?: Partial<Subdivision>, _relationshipsToOmit: Set<string> = new Set()): { __typename: 'Subdivision' } & Subdivision => {
    const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
    relationshipsToOmit.add('Subdivision');
    return {
        __typename: 'Subdivision',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : '44b57612-e30f-4ade-ace9-9ed84824880c',
        emoji: overrides && overrides.hasOwnProperty('emoji') ? overrides.emoji! : 'conitor',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'saepe',
    };
};
