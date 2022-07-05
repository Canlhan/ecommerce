import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './pages/Main';
import { Route, Routes,Redirect } from 'react-router-dom';
import Header from './components/navbar/Header';


import Contact from './pages/Contact';
import Login from './pages/Login';


function App() {

  return (
    <React.Fragment>
      
      <Header/>
      
      <Routes>
            <Route path='/home' element={<Main/>}/>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
        
            <Route path='/contact' element={<Contact/>}/>
            
      </Routes>
    </React.Fragment>
  );
}

export default App;
