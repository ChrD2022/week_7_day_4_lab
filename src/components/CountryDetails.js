import Country from "./Country";

const CountryDetails = ({country}) => {
    return(
        <div className='country-detail'>
            Capital : {country.capital}<br/>
            Language : {country.languages[0]}<br/>
            Flag :<br/><img className="fla" src={country.flags.png}/>
            <hr/>
            
        </div>
    )
};

export default CountryDetails;