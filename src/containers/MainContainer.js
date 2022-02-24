import React from 'react';
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
        console.log(`You have selected ${country.name}`);
    };

    const getCountries = () => {
        fetch("https://restcountries.com/v2/all")
        .then(results => results.json())
        .then(data => setCountries(data));
       
    };

    const addFavouriteCountry = (favouriteCountry) => {
        const countryInList = favouriteCountries.includes(favouriteCountry);

        if (countryInList) {
            console.log(`${favouriteCountry.name} removed`);
            favouriteCountries.splice(favouriteCountries.indexOf(favouriteCountry), 1);
            const copyOfFavouriteCountries = [...favouriteCountries];
            setFavouriteCountries(copyOfFavouriteCountries);     
        } 
        else {
        const copyOfFavouriteCountries = [...favouriteCountries, favouriteCountry];
        setFavouriteCountries(copyOfFavouriteCountries);
    }
    };


    return (  
        <>
            <div className="main-container">
                <div className="favourite-color">
                    <h2>Favourite countries</h2>
                    <div className="list-container">
                    <FavouritesList className="lists" favouriteCountries={favouriteCountries} onCountrySelected={onCountrySelected}/> 

                    </div>
                </div>
                
                <div className="country-color">
                    <h2>Country List</h2>
                    <div className="list-container">
                        <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>

                    </div>
                </div>
                {selectedCountry ? <CountryInfo favouriteCountries={favouriteCountries} selectedCountry={selectedCountry} addFavouriteCountry={addFavouriteCountry}/> : null}
            </div>
        </>
    );
}

export default MainContainer;