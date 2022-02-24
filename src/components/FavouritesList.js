import React from 'react';
import CountryItem from './CountryItem';

const FavouritesList = ({favouriteCountries, onCountrySelected}) => {

    const favouriteCountryNodes = favouriteCountries.map((country) => {
            return <CountryItem onCountrySelected={onCountrySelected} country={country} key={country.alpha3Code}/>
    });

    return(
        <ul>
            {favouriteCountryNodes}
        </ul>
    )

}

export default FavouritesList;