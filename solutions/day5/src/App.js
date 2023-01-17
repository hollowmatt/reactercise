import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

const OMDB_URL = "https://www.omdbapi.com/?s=man&apikey=d34482f";

function App() {
  const [loading, isLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(OMDB_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        isLoading(false);
      });
  }, []);

  const search = searchValue => {
    isLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=d34482f`)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          isLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          isLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="React Movie DB"/>
      <Search search={search} />
      <p className='App-intro'>A few movies</p>
      <div className='movies'>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}

      </div>
    </div>
  );
}

export default App;