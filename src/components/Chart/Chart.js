import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { chartActions } from '../../store/chart-slice';
import './chart.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const products=useSelector(state=>state.chart.products)
    const [totalPrice,setTotalPrice]=useState(0);
    
    let totalprice=0;
    let chartClosed=""
    if(!isOpenChart){
        chartClosed="closed"
    }

    const handleClosChart=()=>{
      dispatch(chartActions.toggleChart())
    }
   
    useEffect(()=>{
     products.map((product)=>(
      totalprice+=product.price*product.quantity
      ))
      setTotalPrice(totalprice)
    },[products,totalprice])
    
    


  return (
    <Fragment>
        
   <div class={`shopping-cart-box  ${chartClosed}  animation`} onMouseLeave={handleClosChart}>
       {
           products.length===0 ? 
           
           <div class="warning-message">SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div> 
           
             :
           products.map((product,index)=> <li key={index} class="shopping-cart-product"><ChartCardItem properties={{productId:product.productId,productName:product.productName,price:product.price,quantity:product.quantity}}/> </li>)
           
           
         
          
       }

        <div class="cart-information">
            <Link to="/confirmChart"> <button  class="cart-confirmation-button">SEPETİ ONAYLA</button></Link>
            <div class="cart-price-information"><span class="total-price"></span>{totalPrice}<span>TL</span></div>
        </div>
        
       
        
    </div>
    
    
    
    
    </Fragment>
  )
}

export default Chart;