export interface ICountry {
    name: ICountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: ICountryCurrencies;
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: ICountryDemonyms;
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: {
        [key: string]: number;
    };
    fifa: string;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    coatOfArms: ICoatOfArms;
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
    flags: IFlags;
    borders: string[]
}

interface ICountryName {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
}

interface ICountryCurrencies {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

interface ICountryDemonyms {
    eng: {
        f: string;
        m: string;
    };
    fra: {
        f: string;
        m: string;
    };
}

interface ICoatOfArms {
    png: string;
    svg: string;
}

interface IFlags {
    png: string;
    svg: string;
    alt: string;
}


