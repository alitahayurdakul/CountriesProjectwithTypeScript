    export interface Aym {
        official: string;
        common: string;
    }

    export interface Que {
        official: string;
        common: string;
    }

    export interface Spa {
        official: string;
        common: string;
    }
    export interface Name {
        common: string;
        official: string;

    }

    export interface PEN {
        name: string;
        symbol: string;
    }

    export interface Currencies {
        PEN: PEN;
    }

    export interface Idd {
        root: string;
        suffixes: string[];
    }

    export interface Languages {
        aym: string;
        que: string;
        spa: string;
        deu: string;
    }

    export interface Ara {
        official: string;
        common: string;
    }

    export interface Ces {
        official: string;
        common: string;
    }

    export interface Cym {
        official: string;
        common: string;
    }

    export interface Deu {
        official: string;
        common: string;
    }

    export interface Est {
        official: string;
        common: string;
    }

    export interface Fin {
        official: string;
        common: string;
    }

    export interface Fra {
        official: string;
        common: string;
    }

    export interface Hrv {
        official: string;
        common: string;
    }

    export interface Hun {
        official: string;
        common: string;
    }

    export interface Ita {
        official: string;
        common: string;
    }

    export interface Jpn {
        official: string;
        common: string;
    }

    export interface Kor {
        official: string;
        common: string;
    }

    export interface Nld {
        official: string;
        common: string;
    }

    export interface Per {
        official: string;
        common: string;
    }

    export interface Pol {
        official: string;
        common: string;
    }

    export interface Por {
        official: string;
        common: string;
    }

    export interface Rus {
        official: string;
        common: string;
    }

    export interface Slk {
        official: string;
        common: string;
    }

    export interface Spa2 {
        official: string;
        common: string;
    }

    export interface Swe {
        official: string;
        common: string;
    }

    export interface Urd {
        official: string;
        common: string;
    }

    export interface Zho {
        official: string;
        common: string;
    }

    export interface Maps {
        googleMaps: string;
        openStreetMaps: string;
    }

    export interface Gini {
        2019: number;
    }

    export interface Flags {
        png: string;
        svg: string;
    }

    export interface CapitalInfo {
        latlng: number[];
    }

    export interface CountryType {
        name: Name;
        tld: string[];
        cca2: string;
        ccn3: string;
        cca3: string;
        cioc: string;
        independent: boolean;
        status: string;
        unMember: boolean;
        currencies: Currencies;
        idd: Idd;
        capital: string[];
        altSpellings: string[];
        region: string;
        subregion: string;
        languages: Languages;
        latlng: number[];
        landlocked: boolean;
        borders: string[];
        area: number;
        flag: string;
        maps: Maps;
        population: number;
        gini: Gini;
        fifa: string;
        timezones: string[];
        continents: string[];
        flags: Flags;
        startOfWeek: string;
        capitalInfo: CapitalInfo;
    }


