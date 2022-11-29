import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import { Route, Routes,Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';


import './App.css'
import Shop from './pages/Shop';
import CategoryDetail from './components/Shop/CategoryCard/CategoryDetail';
import ProductDetail from './pages/ProductDetail';
import Chart from './components/Chart/Chart';
import Login from './components/login/Login';
import ConfirmChart from './pages/ConfirmChart';
import { useDispatch, useSelector } from 'react-redux';

import Signup from './components/signup/Signup';
import AddProductVendor from './pages/AddProductVendor';





function App() {
  const isOpenChart=useSelector(state=>state.chart.isOpenChart);

  const dispatch=useDispatch()

  
  return (
    <React.Fragment>
      
     
     
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmChart' element={<ConfirmChart/>}/>
        <Route path='/shop/:categoryId/:productId' element={<ProductDetail/>}/>
        <Route path='/shop/:categoryId'  element={<CategoryDetail/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/addproduct' element={<AddProductVendor/>}/>
      
      </Routes>
      
      <Chart/>
      
      
      
     
    </React.Fragment>
  );
}

export default App;
