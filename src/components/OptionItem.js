import React from "react";

const OptionItem = ({country, index}) =>{
if(country.name.common){
    return <option className="list-style" value={index}>{country.name.common}</option> 
    } else { 
        return null
    }
};

export default OptionItem;