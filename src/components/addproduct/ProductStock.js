





import React from 'react'

import style from './ProductStock.module.css'
const ProductStock = () => {


    

  return (
   <>
   
   <div class={`${style.product_stock_update_page} ${style.page}`}>
                <div class={style.update_confirmation_page}>
                    <div class={style.update_confirmation_box}>
                        <p>Bu ürünü güncellemek istediğinize emin misiniz?</p>
                        <div class={style.confirm_buttons}>
                            <button class={`${style.confirm_button} ${style.yesUpdate}`}>EVET</button>
                            <button class={`${style.confirm_button} ${style.noUpdate}`}>HAYIR</button>
                        </div>
                    </div>
                </div>
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
                     
                        <tr data_id="12">
                            <td>Resim</td>
                            <td>Nike</td>
                            <td>Ayakkabı</td>
                            <td class={style.stok_quantity_information}><span
                                    class={`${style.reduction_operator} ${style.operator}`}>-</span>
                                    <span
                                    class={style.stok_quantity}>28</span>
                                    <span class={`${style.increment_operator} ${style.operator}`}>+</span>
                            </td>
                            <td>2400</td>
                            <td><button class={style.update_buttons}>GÜNCELLE</button></td>
                        </tr>
                        <tr data_id="13">
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
                    </tbody>
                </table>
            </div>
   
   </>
  )
}

export default ProductStock