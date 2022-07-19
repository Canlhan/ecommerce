import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Route, Routes,Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import BrandPromotion from './components/BrandPromotion';
import BestOfWeek from './components/BestOfWeek';





function App() {

  return (
    <React.Fragment>
      
      <Navbar/>
      <Header/>
      <BrandPromotion/>
      <BestOfWeek/>
     
    </React.Fragment>
  );
}

export default App;
