import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {
    
    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index}/>
    });
    
    return(
        <div>
        <ul className="list-style">
            {countryItems}
        </ul>
        </div>
    );
};

export default CountryList;