import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';

const MainContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        fetch("https://restcountries.com/v2/all")
        .then(results => results.json())
        .then(data => setCountries(data));
        console.log(countries);
    }


    return (  
        <>
            <CountriesList countries={countries}/>
        </>
    );
}

export default MainContainer;