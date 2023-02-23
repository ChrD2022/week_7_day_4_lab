import React, { useState, useEffect} from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = (() => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries()
    }, []);

    const loadCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries = setCountries(countries))
    }

    return(
        <div>
        <h2>CountryContainerJS</h2>
        <CountryList/>
        </div>
    )
});

export default CountryContainer;