import OptionItem from "./OptionItem";

const CountrySelector = ({countries, onCountrySelected}) => {
    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    };

    const countryOptions = countries.map((country, index) => {
        return <OptionItem key={index}  country={country} index={index}/>
    });



    return(
        <select defaultValue='' onChange={handleChange}>
            <option value='' selected>Tell me about...</option>
            {countryOptions}
        </select>
    );

}

export default CountrySelector;