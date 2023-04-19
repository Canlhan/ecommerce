import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
import style from './chart.module.css'
const ChartCardItem = ({product}) => {
  
  
  
    const dispatch=useDispatch();
  
    
    

    const handleDeleteProduct=()=>{
        
        dispatch(chartActions.deleteProduct(product.id));
        console.log("product idd"+product.id);
    }
    const handleIncreaseQuantity=()=>{
      
       
        dispatch(chartActions.IncreaseQuantity(product.id))
        console.log("ürün idisi"+JSON.stringify(product.id));
    
     
     
    }
    const handleDecreaseQuantity=()=>{
      
     
        dispatch(chartActions.DecreaseQuantity(product.id))
       
        console.log("ürün idisi"+product.id);
      
      
      
    }
   
    
    


  return (

    <Fragment>
        <div key={product.id} className="shopping_cart_product_picture"></div>
                <p className={style.shopping_cart_product_name}>{product.product.productName}</p>
                <div className={style.shopping_cart_product_quantity_setting}>
                    <input onClick={handleIncreaseQuantity} className={style.increase} type="button" value="-"/>
                    <span className={style.shopping_cart_product_number}>
                      {product.quantity}
                    
                    </span>
                    <input onClick={handleDecreaseQuantity} className={style.reduce} type="button" value="+"/>

                </div>
                
                <div className={style.shopping_cart_product_price_information}>
                    <span className={style.shopping_cart_product_price} data_price="87">
                      {product.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className={`far fa-trash-alt  ${style.shopping_cart_product_trash}`}></i>
    </Fragment>
  )
}

export default ChartCardItem;