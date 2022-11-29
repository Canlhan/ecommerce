

import React from 'react'
import style from './addproductvendor.module.css'

const AddProductVendor = () => {
  
  
    return (
    <>

                <div class={style.container}>
                <div class={style.navigation}>
                <ul class="navigation_list">
                    <li class="navigation_list_item">
                        <a href="#">
                            <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                            <span class="title">SİPARİŞLERİM</span>
                        </a>
                    </li>
                    <li class="navigation_list_item">
                        <a href="#">
                            <span class="icon"><i class="fas fa_comments"></i></span>
                            <span class="title">MESAJLARIM</span>
                        </a>
                    </li>
                    <li class="navigation_list_item">
                        <a href="#">
                            <span class="icon"><i class="fas fa_heart"></i></span>
                            <span class="title">TAKİP ETTİKLERİM</span>
                        </a>
                    </li>
                    <li class="navigation_list_item">
                        <a href="#">
                            <span class="icon"><i class="fas fa_address_card"></i></span>
                            <span class="title">ADRESİM</span>
                        </a>
                    </li>
                </ul>
                <div class="toggle"></div>
                </div>
                <div class="page_content">
                <div class="product_add_page">
                    <form enctype="multipart/form_data" action="__URL__" method="POST">
                        <div class="data widthOneHundred">
                            <div class="product_image"></div>
                            <input type="file" id="file" name="productImage" accept="image/x_png,image/gif,image/jpeg"
                                required />
                        </div>
                        <div class="data scaledWidth inclusive">
                            <label for="productName">ÜRÜN ADI</label>
                            <input type="text" name="productName" id="productName" required />
                        </div>
                        <div class="data scaledWidth inclusive">
                            <label for="productCategory">ÜRÜN KATEGORİ</label>
                            <select id="productCategory" required>
                                <option value="">Kategori Seçiniz...</option>
                                <option value="beyaz eşya">Beyaz Eşya</option>
                                <option value="erkek giyim">Erkek Giyim</option>
                                <option value="kadın giyim">Kadın Giyim</option>
                                <option value="çocuk giyim">Çocuk Giyim</option>
                            </select>
                        </div>
                        <div class="data scaledWidth inclusive">
                            <label for="productPrice">ÜRÜN FİYAT</label>
                            <input type="number" name="productPrice" id="productPrice" min="0" step="0.01" required />
                        </div>
                        <div class="data scaledWidth inclusive">
                            <label for="productStock">ÜRÜN STOK MİKTARI</label>
                            <input type="number" name="productStock" id="productStock" min="1" pattern="[0_9]" required />
                        </div>
                        <div class=" data widthOneHundred inclusive">
                            <label for="productDescription">ÜRÜN AÇIKLAMASI</label>
                            <textarea name="productDescription" id="productDescription" rows="5" required></textarea>
                        </div>
                        <input type="submit" value="ÜRÜN EKLE"/>
                    </form>
                </div>
                </div>
                </div>
    </>
  )
}

export default AddProductVendor