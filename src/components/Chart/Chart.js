import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { chartActions } from '../../store/chart-slice';
import './chart.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {
  const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const products=useSelector(state=>state.chart.products);
    const totalPrice=useSelector(state=>state.chart.sumPrice);
    
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
      totalprice+=product.unitPrice*quantity
      ))
      console.log("üstte total: "+totalPrice);
      dispatch(chartActions.SetSumPrice(totalprice))
      console.log("sdlkfsdfşdsf "+quantity);
      
      
    },[products,totalprice,quantity])
    
    


  return (
    <Fragment>
        
   <div class={`shopping-cart-box  ${chartClosed}  animation`} onMouseLeave={handleClosChart}>
       {
           products.length===0 ? 
           
           <div class="warning-message">SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div> 
           
             :
           products.map((product,index)=> <li key={index} class="shopping-cart-product">
             <ChartCardItem properties={product} setQuantity={setQuantity} quantity={quantity}/> </li>)
           
           
         
          
       }

        <div class="cart-information">
            <Link to="/confirmChart" totalprice={totalPrice}> <button  class="cart-confirmation-button">SEPETİ ONAYLA</button></Link>
            <div class="cart-price-information"><span class="total-price">
              </span>{totalPrice}<span>TL</span></div>
        </div>
        
       
        
    </div>
    
    
    
    
    </Fragment>
  )
}

export default Chart;