




import React, { useContext, useEffect, useState } from 'react'
import { JsxEmit } from 'typescript';
import VendorContext from '../../context/vendorContext';
import OrderAcceptFeedback from './feedbacks/OrderAcceptFeedback';
import OrderItem from './orderitems/OrderItem';
import style from './ProductOrderAccept.module.css'


const ProductOrderAccept = () => {
   
    const{vendor}=useContext(VendorContext);

    //console.log("vendor: "+JSON.stringify(vendor));

    const[orderedProducts,setProduct]=useState([]);
    const vendorId=localStorage.getItem("sellerId");

   
   
    useEffect(()=>{
        console.log("vendor orders: "+JSON.stringify(vendor.orders))
        setProduct([...vendor.orders])

    },[])
    const  changeConfirmTrue=()=>{

        
    }

    const changeConfirmFalse=()=>{
       
    }
    // orders get


  return (
  <>
  
  <div className={`${style.order_confirmation_page} ${style.page}`}>
                
              
                
                <table>
                    <thead>
                        <tr>
                            <th>SİPARİŞ VEREN KİŞİ</th>
                            <th>SİPARİŞ EDİLEN ÜRÜN</th>
                            <th>SİPARİŞ EDİLEN ÜRÜN ADEDİ</th>
                            
                            <th>SİPARİŞ TARİHİ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={style.order_list}>
                        

                        {
                            vendor.orders.map((orderedProduct)=>{

                                
                                return <OrderItem key={orderedProduct.id} orderProduct={orderedProduct} style={style} changeConfirm={changeConfirmTrue}/>
                            })
                        }
                        
                        
                        
                    </tbody>
                </table>
    </div>
    
  </>
  )
}

export default ProductOrderAccept;