import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';

function AppRouter() {
  return(
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
          <Route element={<FirstStep/>} path="/" exact={true} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;