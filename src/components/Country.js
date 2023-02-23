import React, { useEffect, useState } from "react";
import './country.css';

const Country = ({country}) => {

    const formattedPop = (country) => {
        return country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return(
        <>
        <li><img className="fla" src={country.flags.png}/> <br/> {country.name.common}<br/>Population: {formattedPop(country)}</li>
        <hr/>
        </>
    )
};

export default Country;