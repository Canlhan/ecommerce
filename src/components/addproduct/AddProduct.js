import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import Usefetchdata from '../../customHooks/Usefetchdata';
import Usepostdata from '../../customHooks/Usepostdata';
const AddProduct = ({style}) => 
{   
    
   
    const{register,handleSubmit}=useForm();
    const categories=Usefetchdata("https://localhost:44301/api/category/getall");
    console.log(categories);
    const[data,setData]=useState({url:"",object:{ProductName:"",CategoryID:null,UnitPrice:null,UnitsInStock:null,ProductPhoto:""}})

    const success=Usepostdata(data)

    const onsubmit=(data)=>{
        setData( {url:"https://localhost:44301/api/products/add",object:{ProductName:data.ProductName,CategoryID:data.CategoryID,UnitPrice:data.UnitPrice,UnitsInStock:data.UnitsInStock,ProductPhoto:"dfgfdg"}})
        console.log(JSON.stringify(data)+"addproductda sayfasından");
    }
    if(success.success==true){
       
    }

    console.log(JSON.stringify(success))
    
  return (

    <>
        <div class={style.page_content}>
                <div class={style.product_add_page}>
                    <form encType="multipart/form-data" action="#" onSubmit={handleSubmit(onsubmit)}>
                        <div class={`${style.data} ${style.widthOneHundred}`}>
                            <div class={style.product_image}>
                                
                            </div>
                            <input type="file" id="file"  accept="image/x-png,image/gif,image/jpeg"
                                required />
                        </div>
                        <div class={`${style.data} ${style.scaledWidth} ${style.inclusive}`}>
                            <label for="productName">ÜRÜN ADI</label>
                            <input type="text" {...register("ProductName")} id="productName" required />
                        </div>
                        <div class={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label for="productCategory">ÜRÜN KATEGORİ</label>
                            <select id="productCategory"  {...register("CategoryID")} required>
                                <option value="">Kategori Seçiniz...</option>
                                {
                                    categories.map((category)=><option value={category.categoryID}>{category.categoryName}</option>
                                )

                                }
                                
                                
                            </select>
                        </div>
                        <div class={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label for="productPrice">ÜRÜN FİYAT</label>
                            <input type="number" {...register("UnitPrice")} id="productPrice" min="0" step="0.01" required />
                        </div>
                        <div class={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label for="productStock">ÜRÜN STOK MİKTARI</label>
                            <input type="number" {...register("UnitsInStock")} id="productStock" min="1" pattern="[0_9]" required />
                        </div>
                        <div class={`${style.data} ${ style.widthOneHundred} ${style.inclusive}`}>
                            <label for="productDescription">ÜRÜN AÇIKLAMASI</label>
                            <textarea {...register("Description")} id="productDescription" rows="5" required></textarea>
                        </div>
                        <input type="submit" value="ÜRÜN EKLE"/>
                    </form>
                </div>
                </div>
    </>
  )
}

export default AddProduct