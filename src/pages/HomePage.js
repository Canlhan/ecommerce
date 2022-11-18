import React, { Fragment } from 'react'
import BestOfWeek from '../components/homepageother/BestOfWeek'
import BrandPromotion from '../components/homepageother/BrandPromotion'
import Chart from '../components/Chart/Chart'
import Footer from '../components/homepageother/Footer'
import Header from '../components/homepageother/Header'
import Introduction from '../components/homepageother/Introduction'
import Navbar from '../components/navbar/Navbar'
import ProductInformation from '../components/homepageother/ProductInformation'
import Sponsors from '../components/homepageother/Sponsors'

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