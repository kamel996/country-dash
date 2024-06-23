export interface ICountry {
    name: ICountryName;
    independent: boolean;
    population: number;
    unMember: boolean;
    currencies: ICountryCurrencies;
    capital: string[];
    region: string;
    languages: {
        [key: string]: string;
    };
    area: number;
    demonyms: ICountryDemonyms;
    flag: string;
    fifa: string;
    timezones: string[];
    continents: string[];
    startOfWeek: string;
    flags: IFlags;
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


