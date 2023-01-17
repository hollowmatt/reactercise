import React, { Component, State } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formattedCapital = 
    capital.length > 0 ? (
      <>
        <span>Capital: </span> {capital}
      </>
    ) : (
     ''
    );
  const formatLanguage = languages.length > 1 ? 'Languages' : 'Language'
  console.log(languages);
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'> {name.toUpperCase()} </h3>
      <div className='country_text'>
        <p>{formattedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
      </div>
    </div>
  );
}


function App() {

  const fetchCountryData = async() => {
    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data,});
  }

  fetchCountryData();
  
  return (
    <div className="App">
      <h1>Using Fetch</h1>
      <div>
        {this.state.data.map((country) => (<Country country={country}/>))}
      </div>

    </div>
  );
}

export default App;
