import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

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
import CategoryDetail from './components/Shop/CategoryDetail';
import ProductDetail from './pages/ProductDetail';
import Chart from './components/Chart/Chart';
import Login from './components/login/Login';




function App() {
      
  return (
    <React.Fragment>
      
     

      <Routes>
        <Route path='/shop/:categoryId/:productId' element={<ProductDetail/>}/>
          <Route path='/shop/:categoryId'  element={<CategoryDetail/>}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/' element={<Login/>}/>
         
         

      </Routes>
      <Chart/>
      
     
    </React.Fragment>
  );
}

export default App;
