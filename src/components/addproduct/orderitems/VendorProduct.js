


import React, { useEffect, useRef, useState } from 'react'

const VendorProduct = ({style,updated,vendorProduct,yes}) => {

const decreases=useRef();

  const[stock,setStock]=useState(vendorProduct.quantity);

  



    const changeUpdate=()=>{
        updated();
    }

    const incrementStock=()=>{
        setStock((prev)=>prev+1);
    }

    const decreaseStock=()=>{
      console.log(decreases.current.value)
      if(stock>0){
        setStock((prev)=>prev-1);
      }
      
    }

   

    useEffect(()=>{
      
    },[yes])

  return (
   <>
    
    <tr>
            <td>Resim</td>
            <td>{vendorProduct.product.productName}</td>
            <td>{vendorProduct.product.category.categoryName}</td>
            <td class={style.stok_quantity_information}>
              <span
                    class={`${style.reduction_operator} ${style.operator}`} onClick={decreaseStock} >-</span>
                    <span
                    class={style.stok_quantity} ref={decreases} >{stock}</span>
                    <span class={`${style.increment_operator} ${style.operator}`} onClick={incrementStock}>+</span>
            </td>
            <td>{vendorProduct.price}</td>
            <td><button class={style.update_buttons} onClick={changeUpdate}>GÜNCELLE</button></td>
     </tr>


   </>
  )
}

export default VendorProduct