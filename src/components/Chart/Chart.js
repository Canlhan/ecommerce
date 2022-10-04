import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './chart.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {

    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const products=useSelector(state=>state.chart.products)

    let chartClosed=""
    if(!isOpenChart){
        chartClosed="closed"
    }

   
    


  return (
    <Fragment>
        
   <div class={`shopping-cart-box  ${chartClosed}  animation`}>
       {
           products.length==0 ? 
           
           <div class="warning-message">SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div> 
           
             :
           products.map((product)=> <li class="shopping-cart-product"><ChartCardItem properties={{productName:product.productName,price:product.price}}/> </li>)
           
           
         
          
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