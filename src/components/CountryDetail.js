import React from "react";
import CountriesContainer from "../containers/CountriesContainer";

const CountryDetail = ({selectedCountry, addCountryToFav}) => {



  return(
    <>
    <div>
        <h3>{selectedCountry.name.common}</h3>
        <p>Capital City: {selectedCountry.capital}</p>
        <p>Population: {selectedCountry.population}</p>
        <p></p>
    </div>
    <button type="button" onClick={ () => addCountryToFav(selectedCountry)}>Add to Favorites</button>
    </>
  )
}
export default CountryDetail