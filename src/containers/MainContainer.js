import React from 'react'
import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';

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
            <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>
        </>
    );
}

export default MainContainer;