import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
const ChartCardItem = (props) => {
  
  const [quantity,setQuantity]=useState(1);
  
    const dispatch=useDispatch();
  
    const handleDeleteProduct=()=>{
        
        dispatch(chartActions.deleteProduct(props.properties.productId));
        console.log("product idd"+props.properties.productId);
    }
    const handleIncreaseQuantity=()=>{
      if(quantity>1){
        setQuantity(quantity-1);
        props.setQuantity(quantity-1);
      }
     
     
    }
    const handleDecreaseQuantity=()=>{
      
      if( quantity<11){
        setQuantity(quantity+1);
        props.setQuantity(quantity+1);
      }
      
      
      
    }



  return (

    <Fragment>
        <div key={props.properties.productId} className="shopping-cart-product-picture"></div>
                <p className="shopping-cart-product-name">{props.properties.productName}</p>
                <div className="shopping-cart-product-quantity-setting">
                    <input onClick={handleIncreaseQuantity} className="increase" type="button" value="-"/>
                    <span className="shopping-cart-product-number">{quantity}</span>
                    <input onClick={handleDecreaseQuantity} className="reduce" type="button" value="+"/>

                </div>
                
                <div className="shopping-cart-product-price-information">
                    <span className="shopping-cart-product-price" data-price="87">
                      {props.properties.unitPrice}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className="far fa-trash-alt shopping-cart-product-trash"></i>
    </Fragment>
  )
}

export default ChartCardItem