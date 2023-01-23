



import React, { useEffect, useState } from 'react'

const OrderItem = ({style,order,changeConfirm}) => {
  const BASE_URL="https://localhost:44301/api/";

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

    useEffect(()=>{
      if(clickk){
        confirmorder();
        }
      
    },[clickk])

  return (
    <>

                        <tr >
                            <td>{order.Name}</td>
                            <td>{order.productName}</td>
                            <td>1</td>
                            
                            <td>{order.orderDate}</td>
                            <td><button className={style.order_confirmation_button} onClick={setConfirm}>SİPARİŞ ONAYLA</button></td>
                        </tr>
    
    </>
  )
}

export default OrderItem