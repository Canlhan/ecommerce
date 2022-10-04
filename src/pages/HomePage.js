import React, { Fragment } from 'react'
import BestOfWeek from '../components/BestOfWeek'
import BrandPromotion from '../components/BrandPromotion'
import Chart from '../components/Chart/Chart'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Navbar from '../components/navbar/Navbar'
import ProductInformation from '../components/ProductInformation'
import Sponsors from '../components/Sponsors'
import './HomePage.module.css'
const HomePage = () => 
{

  return (
    
    <Fragment>
      
      <Navbar/>
      
     <Header/>
      <BrandPromotion/>
      <BestOfWeek/>
      
      <Sponsors/>
      <Introduction/>
      <ProductInformation/>
      <Footer/>
    </Fragment>

    
  )
}

export default HomePage;