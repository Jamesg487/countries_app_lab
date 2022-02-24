import React from 'react'
import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';
import CountryInfo from '../components/CountryInfo'

const MainContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, []);

    const onCountrySelected = (country) => {
        setSelectedCountry(country);
        console.log(`You have selected ${country.name}`)
    };

    const getCountries = () => {
        fetch("https://restcountries.com/v2/all")
        .then(results => results.json())
        .then(data => setCountries(data));
       
    }
    return (  
        <>
            <div className="main-container">
                <div className="country-list">
                <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>
                </div>
                {selectedCountry ? <CountryInfo selectedCountry = {selectedCountry}/> : null}
            </div>
        </>
    );
}

export default MainContainer;