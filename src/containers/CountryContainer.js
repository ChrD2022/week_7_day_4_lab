import React, { useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetails from '../components/CountryDetails';
import CountrySelector from '../components/CountrySelector';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        loadCountries()
    }, []);

    const loadCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    };

    const onCountryClicked = function(country){
        setSelectedCountry(country)
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country)
    };

    return(
        <div>
        {countries.length > 0 ? <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/> : null}
        {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
        <CountryList countries={countries} onCountryClicked={onCountryClicked}/>
        </div>
    )
};

export default CountryContainer;