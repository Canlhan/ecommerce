import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './pages/Main';
import { Route, Routes,Redirect } from 'react-router-dom';
import Header from './components/navbar/Header';
import About from './pages/About';
import Buy from './pages/Buy';
import Contact from './pages/Contact';


function App() {

  return (
    <React.Fragment>
      
      <Header/>
      
      <Routes>
            <Route path='/home' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/buy' element={<Buy/>}/>,
            <Route path='/contact' element={<Contact/>}/>
            
      </Routes>
    </React.Fragment>
  );
}

export default App;
