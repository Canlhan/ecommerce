import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chartActions } from '../../store/chart-slice';
import './chart.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {

    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const products=useSelector(state=>state.chart.products)

    const dispatch=useDispatch();

    let chartClosed=""
    if(!isOpenChart){
        chartClosed="closed"
    }

    const handleClosChart=()=>{
      dispatch(chartActions.toggleChart())
    }
   
    


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
            <button  class="cart-confirmation-button">SEPETİ ONAYLA</button>
            <div class="cart-price-information"><span class="total-price"></span><span>TL</span></div>
        </div>
        
       
        
    </div>
    
    
    
    
    </Fragment>
  )
}

export default Chart;