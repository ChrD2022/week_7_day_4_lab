import React from "react";

const Country = (({country}) => {
    return(
        <>
        <h4>CountryJS</h4>
        <li>{country.name.common}</li>
        </>
    )
});

export default Country;