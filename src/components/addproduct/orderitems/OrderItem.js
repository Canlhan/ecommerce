



import React, { useEffect, useState } from 'react'
import { getVendorProductById } from '../../../service/vendorProductService/VendorProductService';

const OrderItem = ({style,order,changeConfirm}) => {
  const BASE_URL="https://localhost:44301/api/";
  const[orderProducts,setOrderProducts]=useState([]);
  const[vendorProductIds,setVendorProductIds]=useState([]);
  const[clickk,setClick]=useState(false);
    const setConfirm=()=>{
       setClick(true);

    }
    const confirmorder=async()=>{

      const url=BASE_URL+`OrderedProduct/update/${order.orderID}`
      const result=await fetch(url);
    const resultjson= await result.json();
    console.log(resultjson);

    }
    console.log("customer name: "+JSON.stringify());
    useEffect(()=>{
      order.orderProducts.map((orderProduct)=>{
        setVendorProductIds((prev)=>[...prev,orderProduct.vendorProduct])
        getVendorProductById(orderProduct.vendorProduct).then((response)=>{

          setOrderProducts((prev)=>[...prev,{...orderProduct ,vendorProduct:response.data}])
          console.log("vendorProduct from order: "+JSON.stringify(response));
        });
      });
     
      
    },[])

    //cartproductslar yine id ile geliyor sen onları ayrı bir call yaparak herbir id ye göre cartproduct çekip bilgileirni koycan artık 
    useEffect(()=>{
      if(clickk){
        confirmorder();
        }
      
    },[clickk])

  return (
    <>

                        <tr >
                          {
                            order.orderProducts.map((orderProduct)=>{
                              
                              return <> 
                              <td>{order.customer.firstName}</td>
                              <td></td>
                              <td>{orderProduct.quantity}</td>
                              
                              
                              <td>{order.dateCreated}</td>
                           
                              <br/>
                              </>
                            })
                          }
                            
                            <td><button className={style.order_confirmation_button} onClick={setConfirm}>SİPARİŞ ONAYLA</button></td>
                        </tr>
    
    </>
  )
}

export default OrderItem