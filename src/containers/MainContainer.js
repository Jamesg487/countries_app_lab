import React from 'react'
import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';
import CountryInfo from '../components/CountryInfo'
import FavouritesList from '../components/FavouritesList';

const MainContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

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

    const addFavouriteCountry = (favouriteCountry) => {
        const copyOfFavouriteCountries = [...favouriteCountries, favouriteCountry]
        setFavouriteCountries(copyOfFavouriteCountries);
    }


    return (  
        <>
            <div className="main-container">
                <div className="country-list">
                <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>
                </div>
                <FavouritesList favouriteCountries={favouriteCountries}/> 
                {selectedCountry ? <CountryInfo selectedCountry={selectedCountry} addFavouriteCountry={addFavouriteCountry}/> : null}
            </div>
        </>
    );
}

export default MainContainer;