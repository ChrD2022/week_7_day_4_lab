import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {
    
    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index}/>
    });
    
    return(
        <>
        <h3>CountryListJS</h3>
        <ul>
            {countryItems}
        </ul>
        </>
    );
};

export default CountryList;