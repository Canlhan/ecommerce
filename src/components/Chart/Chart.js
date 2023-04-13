import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ChartProductsContext from '../../context/ChartProductContext';
import Usefetchdata from '../../customHooks/Usefetchdata';
import { chartActions } from '../../store/chart-slice';
import style from  './chart.module.css'
import ChartCardItem from './ChartCardItem';
const Chart = () => {
  const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
   
  const[products,setProducts]=useState([]);
    const{chartProducts,isTrigger}=useContext(ChartProductsContext);

    const totalPrice=useSelector(state=>state.chart.sumPrice);
   
    let totalprice=0;

    let chartClosed=""
    if(!isOpenChart){
        chartClosed=style.closed
    }
    // chart getirilcek müşteri idsine göre 
  
    //const carts=Usefetchdata(`http://localhost:8089/carts/`);
    //carts.map((cart)=>console.log(" dönüde "+cart.customer.contact))
    
  

    // KULLANICI OLUŞTUĞUNDA ONUN SPETİNİ DE OLUŞTURMAN GEREK BUNU YAPACAKTIN EN SON 
    // o yüzden bize customerid lazım
    // emaille kullanıcı griiş yaptığında bize apinin customer  dönmesi lazım 

    

    const handleClosChart=()=>{
      
      dispatch(chartActions.toggleChart())
    }
   /*
    useEffect(()=>{
     products.map((product)=>(
       console.log("product in chart: "+product),
      totalprice+=product.price*product.quantity
      ))
      console.log("üstte total: "+totalPrice);
      dispatch(chartActions.SetSumPrice(totalprice))
      console.log("sdlkfsdfşdsf "+quantity);
      
      
    },[products,totalprice,quantity])
    */
    useEffect(()=>{

      setProducts(...chartProducts);
      console.log("ssss")

    },[isTrigger])


  return (
    <Fragment>
        
   <div class={`${style.shopping_cart_box} ${ chartClosed} animation` }  onMouseLeave={handleClosChart}>


       {
       
       chartProducts.length===0 ? 
           
           <div class={style.warning_message}>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div> 
           
             :
             chartProducts.map((product)=> <li key={product.productID} class={style.shopping_cart_product}>
            
             <ChartCardItem properties={product} /> </li>)
           
           
         
          
       }

        <div class={style.cart_information}>
            <Link to="/confirmChart" totalprice={totalPrice}> <button  class={style.cart_confirmation_button}>SEPETİ ONAYLA</button></Link>
            <div class={style.cart_price_information}><span class={style.total_price}>
              </span>{totalPrice}<span>TL</span></div>
        </div>
        
       
        
    </div>
    
    
    
    
    </Fragment>
  )
}

export default Chart;