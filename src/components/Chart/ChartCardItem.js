import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
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
        <div key={props.properties.productId} className="shopping-cart-product-picture"></div>
                <p className="shopping-cart-product-name">{props.properties.productName}</p>
                <div className="shopping-cart-product-quantity-setting">
                    <input onClick={handleIncreaseQuantity} className="increase" type="button" value="-"/>
                    <span className="shopping-cart-product-number">{props.properties.quantity}</span>
                    <input onClick={handleDecreaseQuantity} className="reduce" type="button" value="+"/>

                </div>
                
                <div className="shopping-cart-product-price-information">
                    <span className="shopping-cart-product-price" data-price="87">
                      {props.properties.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className="far fa-trash-alt shopping-cart-product-trash"></i>
    </Fragment>
  )
}

export default ChartCardItem