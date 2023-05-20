




import React, { useContext, useEffect, useState } from 'react'
import VendorContext from '../../context/vendorContext';
import OrderAcceptFeedback from './feedbacks/OrderAcceptFeedback';
import OrderItem from './orderitems/OrderItem';
import style from './ProductOrderAccept.module.css'


const ProductOrderAccept = () => {
    const BASE_URL="https://localhost:44301/api/";
    const[isConfirmOrder,setConfirm]=useState(false);
    const{vendor}=useContext(VendorContext);

    console.log("vendor: "+JSON.stringify(vendor));

    const[orderedProducts,setProduct]=useState([]);
    const vendorId=localStorage.getItem("sellerId");

    const getOrderedProduct=async ()=>{

        const url=BASE_URL+`OrderedProduct/getbyorderedproduct/${vendorId}`
      const result=await fetch(url);
      const json=await result.json();
      const orderedProducts=json.data;
     
      setProduct(orderedProducts);
      
    }

    useEffect(()=>{
       
        setProduct(vendor.orders)

    },[])
    const  changeConfirmTrue=()=>{

        setConfirm(true);
    }

    const changeConfirmFalse=()=>{
        setConfirm(false);
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
                            orderedProducts.map((ordereProduct)=>{

                                return <OrderItem order={ordereProduct} style={style} changeConfirm={changeConfirmTrue}/>
                            })
                        }
                        
                        
                        
                    </tbody>
                </table>
    </div>
    
  </>
  )
}

export default ProductOrderAccept;