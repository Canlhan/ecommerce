import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
import style from './chart.module.css'
const ChartCardItem = ({properties,setVendor}) => {
  
  
  console.log("chart CART İTEMMMM: "+JSON.stringify(properties));
    const dispatch=useDispatch();
  
    

    const handleDeleteProduct=()=>{
        
        dispatch(chartActions.deleteProduct(properties.productID));
        console.log("product idd"+properties.productID);
    }
    const handleIncreaseQuantity=()=>{
      
       
        dispatch(chartActions.IncreaseQuantity(properties.productID))
        console.log("ürün idisi"+JSON.stringify(properties.productID));
    
     
     
    }
    const handleDecreaseQuantity=()=>{
      
     
        dispatch(chartActions.DecreaseQuantity(properties.productID))
       
        console.log("ürün idisi"+properties.productId);
      
      
      
    }
   
    
    


  return (

    <Fragment>
        <div key={properties.productId} className="shopping_cart_product_picture"></div>
                <p className={style.shopping_cart_product_name}>{properties.productName}</p>
                <div className={style.shopping_cart_product_quantity_setting}>
                    <input onClick={handleIncreaseQuantity} className={style.increase} type="button" value="-"/>
                    <span className={style.shopping_cart_product_number}>
                      {properties.quantity}
                    
                    </span>
                    <input onClick={handleDecreaseQuantity} className={style.reduce} type="button" value="+"/>

                </div>
                
                <div className={style.shopping_cart_product_price_information}>
                    <span className={style.shopping_cart_product_price} data_price="87">
                      {properties.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className={`far fa-trash-alt  ${style.shopping_cart_product_trash}`}></i>
    </Fragment>
  )
}

export default ChartCardItem