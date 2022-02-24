import React from 'react'
import CountryItem from './CountryItem';

const FavouritesList = ({favouriteCountries}) => {

    const favouriteCountryNodes = favouriteCountries.map((country) => {
            return <CountryItem country={country} key={country.alpha3Code}/>
    });
        
    

    return(
        <ul>
            {favouriteCountryNodes}
        </ul>
    )

}

export default FavouritesList;