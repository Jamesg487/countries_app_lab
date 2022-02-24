import React from 'react'
import CountryItem from "./CountryItem";

const CountriesList = ({countries, onCountrySelected}) => {

    const countryNodes = countries.map((country) => {
        return <CountryItem onCountrySelected= {onCountrySelected} country={country} key={country.alpha3Code} />
    });

    return ( 
        <>
            <ul>
                {countryNodes}
            </ul>
        </>
     );
}

export default CountriesList;