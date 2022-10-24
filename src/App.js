import React  from "react";
import CountriesContainer from './containers/CountriesContainer' 
import './App.css';
import totalPop from './containers/CountriesContainer'


function App() {
  return (
    <div className="App">
    <h1>Countries</h1>
    {/* <h2>Total Population:</h2> */}
    <CountriesContainer/>
    </div>
  );
}

export default App;
