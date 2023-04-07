





import React, { useContext, useEffect, useState } from 'react'
import VendorContext from '../../context/vendorContext'
import { getVendorProductsByVendorId } from '../../service/vendorProductService/VendorProductService'
import { getVendorByEmail } from '../../service/VendorService'
import VendorProductUpdate from './feedbacks/VendorProductUpdate'
import VendorProduct from './orderitems/VendorProduct'

import style from './ProductStock.module.css'
const ProductStock = () => {


    const [isUpdate,setUpdate]=useState(false);
    const[getvendorProducts,setVendorProducts]=useState([]);
    const vendorId=localStorage.getItem("sellerId");
    const[isYes,setYes]=useState(false);

    const {vendor}=useContext(VendorContext);
    
    const getVendorProducts=()=>{

        getVendorProductsByVendorId(vendor.id).then((response)=>{

           
          
           setVendorProducts(response)
           
           console.log(response)
            
        })
    }


    useEffect(()=>{

        getVendorProducts();
    },[])

const getVendorProductId=()=>{


    }

        const changeUpdateTrue=()=>{
            setUpdate(true);
        }
        const changeUpdateFalse=()=>{
            setUpdate(false);
        }
  return (
   <>
   
   <div class={`${style.product_stock_update_page} ${style.page}`}>
                

                {
                   isUpdate && <VendorProductUpdate setYes={setYes} updated={changeUpdateFalse} style={style}/>
                }
                <table>
                    <thead>
                        <tr>
                            <th>ÜRÜN RESİM</th>
                            <th>ÜRÜN AD</th>
                            <th>ÜRÜN KATEGORİ</th>
                            <th>ÜRÜN STOK</th>
                            <th>ÜRÜN FİYAT</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class={style.product_update_list}>
                     
                     {
                        
                         getvendorProducts.map((vendorProduct)=>{

                            
                            return  <VendorProduct yes={isYes} key={vendorProduct.id} vendorProduct={vendorProduct}  updated={changeUpdateTrue} style={style}/> 
                         })
                         
                     }
                       
                        {
                            /**
                             * <tr data_id="13">
                            <td>Resim</td>
                            <td>Adidas</td>
                            <td>Ayakkabı</td>
                            <td class={style.stok_quantity_information}>
                                <span
                                    class={`${style.reduction_operator} ${style.operator}`}>-</span>
                                    
                            <span
                                    class={style.stok_quantity}>36</span><span class={`${style.increment_operator} ${style.operator}`}>+</span>
                            </td>
                            <td>2260</td>
                            <td><button class={style.update_buttons}>GÜNCELLE</button></td>
                        </tr>
                             */
                        }
                        
                    </tbody>
                </table>
            </div>
   
   </>
  )
}

export default ProductStock