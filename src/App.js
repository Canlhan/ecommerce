import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Route, Routes,Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import BrandPromotion from './components/BrandPromotion';
import BestOfWeek from './components/BestOfWeek';
import Sponsors from './components/Sponsors';
import Introduction from './components/Introduction';
import ProductInformation from './components/ProductInformation';
import Footer from './components/Footer';

import './App.css'
import Shop from './pages/Shop';




function App() {

  return (
    <React.Fragment>
      
      <Navbar/>

      <Routes>

          <Route path='/shop' element={<Shop/>}/>
          <Route path='/' element={<HomePage/>}/>

      </Routes>
      
     
    </React.Fragment>
  );
}

export default App;
