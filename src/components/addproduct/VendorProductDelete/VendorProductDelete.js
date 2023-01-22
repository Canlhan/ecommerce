


import React from 'react'

const VendorProductDelete = ({style,deleted,setId,product,setProductıd}) => {

    
  const setIDdelete=()=>{
    setId(product.vendorProductID);
    setProductıd(product.productID);
  }
  return (
    <>
     <tr data_id="12">
                            <td>Resim</td>
                            <td>{product.productName}</td>
                            <td>{product.categoryName}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.price}</td>
                            <td class={`${style.trash}`} onClick={setIDdelete}>
                                <i class="fas fa-trash">
                                    </i>
                            </td>
                        </tr>
    </>
  )
}

export default VendorProductDelete