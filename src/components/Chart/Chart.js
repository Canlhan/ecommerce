import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ChartProductsContext from '../../context/ChartProductContext';
import CustomerContext from '../../context/customerContext';
import Usefetchdata from '../../customHooks/Usefetchdata';
import { createCart } from '../../service/cartService/chartService';
import { getCustomerByEmail } from '../../service/customerService/CustomerService';
import { chartActions } from '../../store/chart-slice';
import style from  './chart.module.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {
  const[cust,setCust]=useState({});
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const {customer}=useContext(CustomerContext);
    const email=localStorage.getItem("customerEmail");
    const products=useSelector(state=>state.chart.products);
    const[totalPrice,setTotalPrice]=useState(0);
   
    console.log("sepetteki ürüneler: "+JSON.stringify(products))
    useEffect(()=>{
      getCustomerByEmail(email).then((response)=>{
        console.log("char email customer: "+JSON.stringify(response));
        setCust(response);
      });
    },[])
      
    let chartClosed=""
    if(!isOpenChart){
        chartClosed=style.closed
    }
    
    const handleClosChart=()=>{
      
      dispatch(chartActions.toggleChart())
      
    }
  
   const gotoconfirm=()=>{

    dispatch(chartActions.SetSumPrice(totalPrice))
    createCart(cust,products)

   }


    useEffect(()=>{

    
     const totalPrice = products.reduce((sum, product) => sum + product.price*product.quantity, 0);
     console.log("tot: "+totalPrice);
    setTotalPrice(totalPrice);
    console.log("customer in chart:" +JSON.stringify(customer)) 

    },[products])



  return (
    <Fragment>
        
   <div class={`${style.shopping_cart_box} ${ chartClosed} animation` }  onMouseLeave={handleClosChart}>


       {
       
       products.length===0 ? 
           
           <div class={style.warning_message}>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div> 
           
             :
             products.map((product)=> <li key={product.id} class={style.shopping_cart_product}>
            
             <ChartCardItem product={product} /> </li>)
           
           
         
          
       }

        <div class={style.cart_information}>
            <Link to={{
                    pathname: "/confirmChart",
                    state: {
                      total: totalPrice
                    }
                  }}
            >
              
               <button onClick={gotoconfirm} class={style.cart_confirmation_button}>SEPETİ ONAYLA</button></Link>
            <div class={style.cart_price_information}><span class={style.total_price}>
              </span>{totalPrice}<span>TL</span></div>
        </div>
        
       
        
    </div>
    
    
    
    
    </Fragment>
  )
}

export default Chart;