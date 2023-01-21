




import React, { useState } from 'react'
import OrderAcceptFeedback from './feedbacks/OrderAcceptFeedback';
import OrderItem from './orderitems/OrderItem';
import style from './ProductOrderAccept.module.css'


const ProductOrderAccept = () => {

    const[isConfirmOrder,setConfirm]=useState(false);


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
                
                {
                     isConfirmOrder && <OrderAcceptFeedback changeConfirmFalse={changeConfirmFalse} changeTrueconfirm={changeConfirmTrue} style={style} />
                }
                
                <table>
                    <thead>
                        <tr>
                            <th>SİPARİŞ VEREN KİŞİ</th>
                            <th>SİPARİŞ EDİLEN ÜRÜN</th>
                            <th>SİPARİŞ EDİLEN ÜRÜN ADEDİ</th>
                            <th>TESLİM EDİLECEK ADRES BİLGİSİ</th>
                            <th>SİPARİŞ TARİHİ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={style.order_list}>
                        

                        <OrderItem order={{id:1}} style={style} changeConfirm={changeConfirmTrue}/>
                        
                        
                    </tbody>
                </table>
    </div>
    
  </>
  )
}

export default ProductOrderAccept;