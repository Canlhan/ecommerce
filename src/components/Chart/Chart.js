import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Usefetchdata from '../../customHooks/Usefetchdata';
import { chartActions } from '../../store/chart-slice';
import './chart.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {
  const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const products=useSelector(state=>state.chart.products);


    const totalPrice=useSelector(state=>state.chart.sumPrice);
    const customer=useSelector(state=>state.customer.customer);
    let totalprice=0;
    let chartClosed=""
    if(!isOpenChart){
        chartClosed="closed"
    }
    // chart getirilcek müşteri idsine göre 
    const cart=Usefetchdata(`https://localhost:44301/api/carts/getbyid/4`)
    //const carts=Usefetchdata(`http://localhost:8089/carts/`);
    //carts.map((cart)=>console.log(" dönüde "+cart.customer.contact))
    
    console.log("cart geldiiii ")

    // KULLANICI OLUŞTUĞUNDA ONUN SPETİNİ DE OLUŞTURMAN GEREK BUNU YAPACAKTIN EN SON 
    // o yüzden bize customerid lazım
    // emaille kullanıcı griiş yaptığında bize apinin customer  dönmesi lazım 

    console.log("category detail "+products.map((item)=>console.log("productName CHART: "+item.productID)))
    const handleClosChart=()=>{
      dispatch(chartActions.toggleChart())
    }
   
    useEffect(()=>{
     products.map((product)=>(
       console.log("product in chart: "+product),
      totalprice+=product.price*product.quantity
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
           products.map((product)=> <li key={product.productID} class="shopping-cart-product">
            
             <ChartCardItem properties={product} /> </li>)
           
           
         
          
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