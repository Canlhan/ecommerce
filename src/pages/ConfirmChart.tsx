import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChartCardItem from '../components/Chart/ChartCardItem'
import Navbar from '../components/navbar/Navbar'
import '../components/Chart/chart.module.css'
import style from  './confirmChart.module.css'
import Footer from '../components/homepageother/Footer'
import { getCustomerByEmail } from '../service/customerService/CustomerService'
import { VendorProduct } from '../components/models/VendorProduct'
import { OrderProductRequest } from '../components/models/OrderProductRequest'
import { Order } from '../components/models/Order'
import { saveOrder } from '../service/order/OrderService'
import CustomerContext from '../context/customerContext'
import ChartProductsContext from '../context/ChartProductContext'


const ConfirmChart = (props) => {
    
    const cart=localStorage.getItem("cartId");
    let cartId:number;
    if(cart!==null){
        cartId=parseInt(cart);
    }
    const products:VendorProduct[]=useSelector((state:any)=>state.chart.products);
    const totalPrice=useSelector((state:any)=>state.chart.sumPrice);
  
    const {chartProducts,cleanTheCartProducts}=useContext(ChartProductsContext);
    const email=localStorage.getItem("customerEmail");
    const[totalPriceConfirm,setTotalPrice]=useState(totalPrice);

    const {customer}=useContext(CustomerContext);
   
    console.log(chartProducts)
    const[cust,setCust]=useState({});
   // const customerId=localStorage.getItem("customerId");

    const[orderProducts,setOrderProducts]=useState<OrderProductRequest[]>([]);
    const[vendorIds,setVendorIds]=useState<number[]>([]);
    const[isPressConfirm,setConfirm]=useState(false);
   
    
    console.log(customer.id);
    const[addedOrder,setAddedOrder]=useState({customerId:16});

    const createOrders=()=>{
        console.log("sepete onaylaya basıldı")
        
        console.log("charrpoduc: "+JSON.stringify(chartProducts))
        
        chartProducts.map(chartProduct=>{
            console.log("cart product quantity: "+chartProduct.quantity)
            const orderProduct:OrderProductRequest=
            {
                quantity:chartProduct.quantity,
                cartProductId:chartProduct.id
            };
            console.log("vendor id burada burada: "+JSON.stringify(chartProduct.vendorProduct.vendor))
            setVendorIds((prev)=>
            {

                if(prev.includes(chartProduct.vendorProduct.vendor.id)){
                    return[...prev]
                }
            return  [...prev,chartProduct.vendorProduct.vendor.id]
            
        
            });
                
            
            setOrderProducts((prev)=>[...prev, orderProduct]);

            console.log("product in CONFİRM CART: "+JSON.stringify(chartProduct));
            console.log("orderProduct in CONFİRM CART: "+JSON.stringify(orderProduct));

        })
        setConfirm(true);
       
        // order kaydı yapılmalı içindeki productlar orderproduct nesnesine dönüştürülmeli 
        // ve bir liste halinde order'a eklenmeli

      
    }
    
    useEffect(()=>{

        if(isPressConfirm){
            if(customer!=null){
                console.log("girdi")
                
                const order:Order={
                    customerId:customer.id,
                    orderProducts:orderProducts,
                    vendorIds:vendorIds
    
                }
                console.log("order: "+JSON.stringify(order));
                console.log("orderproduct: "+JSON.stringify(orderProducts))
                console.log("vendorIds: "+JSON.stringify(vendorIds))
                saveOrder(order).then((response)=>{

                    console.log("order kaydedildi: "+JSON.stringify(response))
                    cleanTheCartProducts();
                })
            }
           
        }

    },[isPressConfirm])

    useEffect(()=>{
        getCustomerByEmail(email).then((response)=>{
          console.log("char email customer: "+JSON.stringify(response));
          setCust(response);
        });
      },[])

    useEffect(()=>{

        const totalPrice = products.reduce((sum, product) => sum + product.price*product.quantity, 0);
        setTotalPrice(totalPrice);

    },[products])

    /*
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

    */

  return (
    <Fragment>
       <nav style={{height:'10rem',backgroundColor:'brown',color:'white',textAlign:'center',fontSize:'4.6rem'}}>
       <Navbar/>
        </nav>
    <main>
        <div className={style.product_container}>
            <h2>Sepetim</h2>
            <div className={style.shopping_cart_list}>
                {
                  products.map((product,index)=> {
                   
                   return <li key={index} className={style.shopping_cart_product}>
                      <ChartCardItem  product={product}/> </li>})
                }
               
            </div>
            
        </div>
        <div className={style.order_confirmation}>
            <button onClick={createOrders}>Sepeti Onayla<i className={`${style.fas} ${style.fa_angle_right}`}></i></button>
            <div className={style.order_summary}>
                <h2>Sipariş Özeti</h2>
                <div className={style.total_order_price}>
                    <span>Ürünlerin Toplamı</span>
                    <span>{totalPriceConfirm} TL</span>
                </div>
            </div>
        </div>
    </main>
   <Footer/>
    </Fragment>
  )
}

export default ConfirmChart