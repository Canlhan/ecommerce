import React, { Fragment, useEffect, useState } from 'react'

import {  useParams } from 'react-router-dom'
import Usefetchdata from '../../../customHooks/Usefetchdata';
import { chartActions } from '../../../store/chart-slice';
import Navbar from '../../navbar/Navbar';
import CategoryCard from './CategoryCard';
import './Categorydetail.css'



const CategoryDetail = () => {

  
    const params=useParams()
    const products=Usefetchdata(`https://localhost:44301/api/vendorProducts/getallbycategoryid/${params.categoryId}`);
    console.log("category detail "+products.map((item)=>console.log("productName: "+item.productName)))
    
    console.log("category detaildeki ürünler "+products);

  
    
    
   
   
 

  return (
   <Fragment>
     
    
     <Navbar/>
        <div className='container'>
          
                {
                    products.map((item,index)=>
                    (<div key={index} className='grid_item'> 

                          <CategoryCard  item={item}/>
                     
                     </div>))
                }
                
        </div>
       
      
    
   </Fragment>
  )
}

export default CategoryDetail