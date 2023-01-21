import './App.css';
import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

const OMDB_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

//add this to replace useState with useReducer
const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

// replace the useState declarations with this
const reducer = (state, action) => {
  switch(action.type) {
    case "SEARCH_MOVIES_REQEUST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

function App() {
  // The following 3 useStates are no longer needed
  // const [loading, isLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(OMDB_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        })
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          })
        }
      });
  };

  const { movies, errorMessage, loading } = state;
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