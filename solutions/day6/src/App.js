import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

const GREETING_URL = "http://localhost:8080/greeting";

function App() {

  return (
    <div className="App">
      <Header text="Greeting API"/>
    </div>
  );
}

export default App;
