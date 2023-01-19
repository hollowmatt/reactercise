import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Greet from './components/Greet';
import Message from './components/Message';
import './App.css';

const GREETING_URL = "http://localhost:8080/greeting";
const fetchOps = {
  method: 'GET',
  mode: 'no-cors',
  header: {
    'Content-Type': 'application/json'
  }
};

function App() {
  const [loading, isLoading] = useState(true);
  const [greeting, setGreeting] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(GREETING_URL, fetchOps)
      .then(response => response.json())
      .then(jsonResponse => {
        setGreeting(jsonResponse);
        isLoading(false);
      })
  }, []);

  const greet = greetValue => {
    isLoading(true);
    setErrorMessage(null);

    fetch(`${GREETING_URL}?name=${greetValue}`, fetchOps)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True") {
          setGreeting(jsonResponse);
          isLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          isLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="Greeting API"/>
      <Greet greet={greet} />
      <div>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <span>{errorMessage}</span>
        ) : (
          <Message msg={greeting} />
        )}
      </div>
    </div>
  );
}

export default App;
