import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChartCardItem from '../components/Chart/ChartCardItem'
import Navbar from '../components/navbar/Navbar'
import '../components/Chart/chart.module.css'
import style from  './confirmChart.module.css'
import Footer from '../components/homepageother/Footer'

const ConfirmChart = (props) => {
    const products=useSelector((state)=>state.chart.products);
    const totalPrice=useSelector((state)=>state.chart.sumPrice);
    const[isCreate,setOrder]=useState(false);

    const[isfinishOrder,setFinishOrder]=useState(false);
    const BASE_URL="https://localhost:44301/api/";
    const customerId=localStorage.getItem("customerId");

    const[Orders,setOrders]=useState(null);
    
    console.log(customerId);
    const[addedOrder,setAddedOrder]=useState({customerId:16});

    const createOrders=()=>{
        console.log("sepete onaylaya basıldı")
        setOrder(true);
    }


    const postOrder = async()=>{

        console.log(addedOrder);
        console.log("post order")
        const url=BASE_URL+"Orders/addorder";
        console.log(url)
       const result= await fetch(url,{
           method:"POST",
           headers:{
               'Content-type':'application/json'
           },
           body:JSON.stringify(addedOrder)
       })
       const json=await result.json();
       setFinishOrder(true);
       setOrders(json.data)
       console.log(JSON.stringify(json));
      
    }

    useEffect(()=>{

        if(isCreate){
            console.log("post order useeffect")
            postOrder();
        }
    },[isCreate])


    const postOrderItems=async (product)=>{

        const url=BASE_URL+"OrderedProduct/add";
        console.log({vendorProductID:product.vendorProductID,orderID:Orders.orderID,quantity:product.quantity,state:0})
        console.log(url)
       const result= await fetch(url,{
           method:"POST",
           headers:{
               'Content-type':'application/json'
           },
           body:JSON.stringify({VendorProductID:product.vendorProductID,OrderID:Orders.orderID,Quantity:product.quantity,State:0})
       })
       
    }
    useEffect(()=>{

        if(isfinishOrder){

            products.forEach(element => {
                console.log(element.productId);
                postOrderItems(element);
            });
            
        }
    },[isfinishOrder])

  

  return (
    <Fragment>
       <nav style={{height:'10rem',backgroundColor:'brown',color:'white',textAlign:'center',fontSize:'4.6rem'}}>
       <Navbar/>
        </nav>
    <main>
        <div class={style.product_container}>
            <h2>Sepetim</h2>
            <div class={style.shopping_cart_list}>
                {
                  products.map((product,index)=> {
                   
                   return <li key={index} class={style.shopping_cart_product}>
                      <ChartCardItem  properties={{productId:product.productId,productName:product.productName,price:product.price,quantity:product.quantity}}/> </li>})
                }
               
            </div>
            
        </div>
        <div class={style.order_confirmation}>
            <button onClick={createOrders}>Sepeti Onayla<i class={`${style.fas} ${style.fa_angle_right}`}></i></button>
            <div class={style.order_summary}>
                <h2>Sipariş Özeti</h2>
                <div class={style.total_order_price}>
                    <span>Ürünlerin Toplamı</span>
                    <span>{totalPrice} TL</span>
                </div>
            </div>
        </div>
    </main>
   <Footer/>
    </Fragment>
  )
}

export default ConfirmChart