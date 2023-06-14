import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChartProductsContext from '../../context/ChartProductContext';
import { chartActions } from '../../store/chart-slice';
import style from './chart.module.css'
const ChartCardItem = ({chartProduct}) => {
  
  
  const{removeFromCart}=useContext(ChartProductsContext);
  
    const dispatch=useDispatch();
  
    //console.log("chart içindeki product değişkeni: "+JSON.stringify(chartProduct))
    

    const handleDeleteProduct=()=>{
        
       dispatch(chartActions.deleteProduct(chartProduct.id));
       console.log("dlete: "+JSON.stringify(chartProduct));
      removeFromCart(chartProduct);
        //console.log("product idd"+product.id);
    }
    const handleIncreaseQuantity=()=>{
      
       
        dispatch(chartActions.IncreaseQuantity(chartProduct))
        //console.log("ürün idisi"+JSON.stringify(product.id));
    
     
     
    }
    const handleDecreaseQuantity=()=>{
      
     
        dispatch(chartActions.DecreaseQuantity(chartProduct))
       
        //console.log("ürün idisi"+product.id);
      
      
      
    }
   
    
    


  return (

    <Fragment>
        <div key={chartProduct.id} className="shopping_cart_product_picture"></div>
                <p className={style.shopping_cart_product_name}>{chartProduct.product.productName}</p>
                <div className={style.shopping_cart_product_quantity_setting}>
                    <input onClick={handleIncreaseQuantity} className={style.increase} type="button" value="-"/>
                    <span className={style.shopping_cart_product_number}>
                      {chartProduct.quantity}
                    
                    </span>
                    <input onClick={handleDecreaseQuantity} className={style.reduce} type="button" value="+"/>

                </div>
                
                <div className={style.shopping_cart_product_price_information}>
                    <span className={style.shopping_cart_product_price} data_price="87">
                      {chartProduct.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} className={`far fa-trash-alt  ${style.shopping_cart_product_trash}`}></i>
    </Fragment>
  )
}

export default ChartCardItem;