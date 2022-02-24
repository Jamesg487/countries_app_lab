import React from 'react'
const CountryItem = ({country, onCountrySelected}) => {

   const handleClick = () => {
      onCountrySelected(country)
   }

    return ( 
        <>
           <li onClick={handleClick}>{country.name}</li> 
        </>
     );
}

export default CountryItem;