


import React from 'react'
import style from './ProductDelete.module.css'
const ProductDelete = () => {


  return (

    <>
    
    <div class={`${style.product_deletion_page} ${style.page}`}>
                <div class={`${style.delete_confirmation_page}`}>
                    <div class={`${style.delete_confirmation_box}`}>
                        <p>Bu ürünü silmek istediğinize emin misiniz?</p>
                        <div class={`${style.confirm_buttons}`}>
                            <button class={`${style.confirm_button} ${style.yes}`}>EVET</button>
                            <button class={`${style.confirm_button} ${style.no}`}>HAYIR</button>
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
                            <th><i class="fas fa-trash"></i></th>
                        </tr>
                    </thead>
                    <tbody class={`${style.product_list}`}>
                        
                        <tr data_id="12">
                            <td>Resim</td>
                            <td>Nike</td>
                            <td>Ayakkabı</td>
                            <td>28</td>
                            <td>2400</td>
                            <td class={`${style.trash}`}><i class="fas fa-trash"></i></td>
                        </tr>
                        <tr data_id="13">
                            <td>Resim</td>
                            <td>Adidas</td>
                            <td>Ayakkabı</td>
                            <td>36</td>
                            <td>2260</td>
                            <td class={`${style.trash}`}><i class="fas fa-trash"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </>
  )
}

export default ProductDelete