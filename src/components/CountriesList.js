import CountryItem from "./CountryItem";

const CountriesList = ({countries}) => {

    const countryNodes = countries.map((country) => {
        return <CountryItem country={country} key={country.alpha3Code} />
    });

    return ( 
        <>
            <ul>
                {countryNodes}
            </ul>
        </>
     );
}

export default CountriesList;