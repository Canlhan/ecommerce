



import React, { useEffect, useState } from 'react'
import { getChartProductsById } from '../../../service/cartProductservice/CartProductService';
import { getVendorProductById } from '../../../service/vendorProductService/VendorProductService';

const OrderItem = ({style,orderProduct,changeConfirm}) => {
  const BASE_URL="https://localhost:44301/api/";
  const[orderProducts,setOrderProducts]=useState([]);
  const[vendorProductIds,setCartProductIds]=useState([]);
  const[clickk,setClick]=useState(false);
    const setConfirm=()=>{
       setClick(true);

    }

    //console.log("order item içindekiri orderProuct: "+JSON.stringify(orderProduct))
    const confirmorder=async()=>{

      const url=BASE_URL+`OrderedProduct/update/${orderProduct.orderID}`
      const result=await fetch(url);
    const resultjson= await result.json();
    console.log(resultjson);

    }
  
    useEffect(()=>{
     // console.log("orderProducts: "+JSON.stringify(orderProduct))

      orderProduct.orderProducts.map((orderProduct)=>{
        setCartProductIds((prev)=>[...prev,orderProduct.cartProduct])

          console.log("orderproduct")
        getChartProductsById(orderProduct.cartProduct).then((response)=>{

              // console.log("cartproduct: "+JSON.stringify(response));


              setOrderProducts((prev)=>[...prev,{quantity:response.quantity,productName:response.vendorProduct.product.productName}])




        })
        .catch((er)=>{


          console.log("chart product is not getting according to id ")

        })

        /*
        getVendorProductById(orderProduct.vendorProduct).then((response)=>{

          setOrderProducts((prev)=>[...prev,{...orderProduct ,vendorProduct:response.data}])
          console.log("vendorProduct from order: "+JSON.stringify(response));
        });
        */
      });
     
      
    },[])
    console.log("order product yep yeni:"+JSON.stringify(orderProducts))

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
                           orderProducts.map((orderedProduct)=>{
                             
                              return <> 
                              <td>{orderProduct.customer.firstName}</td>
                              <td>{orderedProduct.productName}</td>
                              <td>{orderedProduct.quantity}</td>
                              
                              
                              <td>{orderProduct.dateCreated}</td>
                           
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