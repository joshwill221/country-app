import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './country-data';

@Injectable()
export class CountryService {

    constructor() { }

    getCountries(): Country[] {
        return COUNTRIES;
    }

    getPopulatedCountries(): Country[] {
        // b.area - a.area returns descending order.
        // .slice(0, 3) returns the first three countries.
        return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
    }

    getLargestCountries(): Country[] {
        return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
    }

    getGPDCountries(): Country[] {
        return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
    }

    getCountry(name: string): Country {
        return COUNTRIES.find(country => country.name === name);
    }
}