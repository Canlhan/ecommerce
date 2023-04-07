import React, { Fragment, useEffect, useState } from 'react'

import {  useParams } from 'react-router-dom'
import Usefetchdata from '../../../customHooks/Usefetchdata';
import { chartActions } from '../../../store/chart-slice';
import Navbar from '../../navbar/Navbar';

import style from './CategoryCard.module.css'
import { getVendorProductsByCategoryId } from '../../../service/vendorProductService/VendorProductService';
import CategoryProductCard from './CategoryProductCard';



const CategoryDetail = () => {

    const[vendorProducts,setVendorProducts]=useState([])
    const params=useParams()

    const getVendorProductsWithCategoryId=(categoryId)=>{

      getVendorProductsByCategoryId(categoryId).then((response)=>{
        setVendorProducts(response);

      });
    }
    useEffect(()=>{

      getVendorProductsWithCategoryId(params.categoryId);
    },[])

    //const products=Usefetchdata(`https://localhost:44301/api/vendorProducts/getallbycategoryid/${params.categoryId}`);
    //console.log("category detail "+products.map((item)=>console.log("productName: "+item.productName)))
    
    console.log("category detaildeki ürünler "+vendorProducts);

  
    
    
   
   
 

  return (
   <Fragment>
     
    
     <Navbar/>
        <div className={style.container}>
          
                {
                    vendorProducts.map((item,index)=>
                    (<div key={index} > 

                          <CategoryProductCard  item={item}/>
                     
                     </div>))
                }
                
        </div>
       
      
    
   </Fragment>
  )
}

export default CategoryDetail