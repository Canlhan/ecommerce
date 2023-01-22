import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
import style from './chart.module.css'
const ChartCardItem = (props) => {
  
  
  console.log("chart CART İTEMMMM: "+JSON.stringify(props.properties));
    const dispatch=useDispatch();
  
    const handleDeleteProduct=()=>{
        
        dispatch(chartActions.deleteProduct(props.properties.productID));
        console.log("product idd"+props.properties.productID);
    }
    const handleIncreaseQuantity=()=>{
      
       
        dispatch(chartActions.IncreaseQuantity(props.properties.productID))
        console.log("ürün idisi"+JSON.stringify(props.properties.productID));
    
     
     
    }
    const handleDecreaseQuantity=()=>{
      
     
        dispatch(chartActions.DecreaseQuantity(props.properties.productID))
       
        console.log("ürün idisi"+props.properties.productId);
      
      
      
    }



  return (

    <Fragment>
        <div key={props.properties.productId} className="shopping_cart_product_picture"></div>
                <p className={style.shopping_cart_product_name}>{props.properties.productName}</p>
                <div className={style.shopping_cart_product_quantity_setting}>
                    <input onClick={handleIncreaseQuantity} className={style.increase} type="button" value="-"/>
                    <span className={style.shopping_cart_product_number}>
                      {props.properties.quantity}
                    
                    </span>
                    <input onClick={handleDecreaseQuantity} className={style.reduce} type="button" value="+"/>

                </div>
                
                <div className={style.shopping_cart_product_price_information}>
                    <span className={style.shopping_cart_product_price} data_price="87">
                      {props.properties.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className={`far fa-trash-alt  ${style.shopping_cart_product_trash}`}></i>
    </Fragment>
  )
}

export default ChartCardItem