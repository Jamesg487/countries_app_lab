import React from 'react'



const CountryInfo = ({selectedCountry, addFavouriteCountry, favouriteCountries}) => {

    

    const handleAddCountry = () => {
        addFavouriteCountry(selectedCountry);
    }

    const checkCountryInFavourites = () => {
        const countryInList = favouriteCountries.includes(selectedCountry);
        if (countryInList){
            return "Remove from"
        }else {
            return "Add to"
        }
    }

    return ( 
        <div>
            <h1>{selectedCountry.name}</h1>

            <img className="flag-img" src={selectedCountry.flag} alt="Country Flag"/>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Main Currency: {selectedCountry.currencies[0].name} ({selectedCountry.currencies[0].symbol})</p>
            <button onClick={handleAddCountry}> {checkCountryInFavourites()} Favourites List</button>
            
        </div>
     );
}

export default CountryInfo;