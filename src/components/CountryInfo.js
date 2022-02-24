import React from 'react'

const CountryInfo = ({selectedCountry}) => {
    return ( 
        <div>
            <h1>{selectedCountry.name}</h1>

            <img className="flag-img" src={selectedCountry.flag} alt="Country Flag"/>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Main Currency: {selectedCountry.currencies[0].name} ({selectedCountry.currencies[0].symbol})</p>

            
        </div>
     );
}

export default CountryInfo;