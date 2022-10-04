import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { chartActions } from '../../store/chart-slice';
const ChartCardItem = (props) => {
    const dispatch=useDispatch();

    const handleDeleteProduct=()=>{
        
        dispatch(chartActions.deleteProduct(props.properties.productName))
    }

  return (

    <Fragment>
        <div class="shopping-cart-product-picture"></div>
                <p class="shopping-cart-product-name">{props.properties.productName}</p>
                <div class="shopping-cart-product-quantity-setting">
                    <input class="increase" type="button" value="-"/>
                    <span class="shopping-cart-product-number">1</span>
                    <input class="reduce" type="button" value="+"/>

                </div>
                
                
                <div class="shopping-cart-product-price-information">
                    <span class="shopping-cart-product-price" data-price="87">{props.properties.price}</span><span>TL</span>
                </div>
                <i onClick={handleDeleteProduct} class="far fa-trash-alt shopping-cart-product-trash"></i>
    </Fragment>
  )
}

export default ChartCardItem