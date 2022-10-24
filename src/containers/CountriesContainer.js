import React ,{useState, useEffect} from "react";
import CountriesList from '../components/CountriesList'
import CountryDetail from '../components/CountryDetail'
import CountryPop from "../components/CountryPop";
import CountrySelector from '../components/CountrySelect'
import CountryFav from '../components/CountryFav'

const CountriesContainer = () => {
  const[countries, setCountries] = useState([])
  const[selectedCountry, setSelectedCountry] = useState(null)
  const[favCountries, setFavCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = function(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }

  const onCountrySelected = function (country){
    setSelectedCountry(country)
  }
  const totalPop =function(){
    let result = 0
    for(var country of countries){
        result += country.population
    }; return result
}
    const addCountryToFav = function(selectedCountry){
        const updatedFavs = [...favCountries, selectedCountry.name.common]
        setFavCountries(updatedFavs)
    
    }
    console.log(favCountries);


    // submittedComment.id = Date.now();
    // const updatedComments = [...comments, submittedComment];
    // setComments(updatedComments);
  return (
    <div>
   
        <CountryPop countries={countries} totalPop={totalPop()}/>
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} addCountryToFav={addCountryToFav}  /> : null}
        <CountryFav favCountries={favCountries}/>


    </div>

  )

  





}
export default CountriesContainer