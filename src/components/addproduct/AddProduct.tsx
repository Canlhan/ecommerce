import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import VendorContext from '../../context/vendorContext';
import Usefetchdata from '../../customHooks/Usefetchdata';
import Usepostdata from '../../customHooks/Usepostdata';
import { getAllCategories } from '../../service/categoryService/CategoryService';

import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Vendor } from '../models/Vendor';
import { VendorProduct } from '../models/VendorProduct';

const AddProduct = ({style}) => 
{   
    const BASE_URL="https://localhost:44301/api/";
    const formdata:FormData=new FormData();

    
    
  
   const[product,setProduct]=useState<Product>();
    const[addeedProdcut,setAddedProduct]=useState<Product>();
    const[categories,setCategories]=useState<Category[]>([]);


    const[isSucces,setSucces]=useState<boolean>(false);
    const vendorId=localStorage.getItem("sellerId");
    console.log(vendorId);
    const{register,handleSubmit}=useForm();
    //const categories=Usefetchdata("https://localhost:44301/api/category/getall");
    

    const {vendor}=useContext(VendorContext);
    const backref = useRef<HTMLDivElement>(null);
    const[photo,setphoto]=useState<string>("");
    const[photoadded,setAddPhoto]=useState<FormData>();
   

    useEffect(()=>{
        getAllCategories().then((response)=>{

            setCategories(response);
            console.log(JSON.stringify(response));
        });
    },[])
    
    const onsubmit=(data)=>{
       console.log("product eklenen "+JSON.stringify({...data,productPhoto:null}))
       const category:Category[]=categories.filter((categorys)=>categorys.id==data.id);
       const product:Product={
            category:category[0],
            productName:data.productName,
            productPhoto:"yok",
            state:true,
            unitInStock:data.unitsInStock,
            unitPrice:data.price,
                
       }
      // const vendorProduct:VendorProduct={...data,productPhoto:null,vendor:vendor};
      const vendorProduct:VendorProduct={
          description:data.description,
          price:data.price,
          product:product,
          quantity:1,
          state:true,
          vendor:vendor
          
      }

      console.log("vendor prodo: "+JSON.stringify(vendorProduct));
    }

    const fileinput=(e)=>{

        console.log(e.target.files[0])
        setphoto(e.target.files[0]); 
        if (backref.current) {
            backref.current.style.backgroundImage = `url("${URL.createObjectURL(e.target.files[0])}")`;
          }
        
    }
    

    

    const addProduct =async()=>{

        const url=BASE_URL+"Products/add";
        
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then((response) => {
            if(response.ok){    
                console.log("üürn ekleme başarılı")
                setSucces(true);
                return response.json();
            }  
        }
        )
        .then((data) => {
            setAddedProduct(data.data);
          console.log('Success:', data.data);
        })
        .catch((error) => {
            alert(error.message);
          console.error('Error:', error.message);
          
        });;
    }

    /*
    useEffect(()=>{

        if(product!==null){
            addProduct();
        }

    },[product])

*/
    const addImage=async(image)=>{
        const url=BASE_URL+"Image/add";
        
        console.log(image)
        const response = await fetch(url,{
            method: "POST",
            headers:{
                'Accept': '*/*',
                
               
            },
            body:image
        })
        .then((response) => {
            if(response.ok){

                
                return response.json();
            }  
        }
        )
        .then((data) => {

          console.log('Success:', data);
        })
        .catch((error) => {
            alert(error.message);
          console.error('Error:', error.message);
          
        });;

    }
/*
    useEffect(()=>{
        console.log("formdata sounda yüklendi")
        if(isSucces!==false && addeedProdcut!==undefined){
            console.log(photo);
            console.log("product undefined değil ve formdataya append olacak ")

            formdata.append('image',photo);
            
            formdata.append('ProductID',addeedProdcut.id.toString());
            console.log(JSON.stringify(formdata));
            setAddPhoto(formdata);
        }
        
        
    },[addeedProdcut,isSucces])

   
    useEffect(()=>{

        if(photoadded!==null){
            console.log("resi")
            addImage(photoadded);
        }
    },[photoadded])

*/
   
    
  return (

    <>
        
                <div className={style.product_add_page}>
                    <form encType="multipart/form-data"  onSubmit={handleSubmit(onsubmit)}>
                        <div className={`${style.data} ${style.widthOneHundred}`}>
                            <div className={style.product_image} ref={backref}>
                                
                            </div>
                            <input type="file" id="file" onChange={fileinput} accept="image/x-png,image/gif,image/jpeg"
                                required />
                        </div>
                        <div className={`${style.data} ${style.scaledWidth} ${style.inclusive}`}>
                            <label htmlFor="productName">ÜRÜN ADI</label>
                            <input type="text" {...register("productName")} id="productName" required />
                        </div>
                        <div className={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label htmlFor="productCategory">ÜRÜN KATEGORİ</label>
                            <select id="productCategory"  {...register("id")} required>
                                <option value="">Kategori Seçiniz...</option>
                                {
                                    categories.map((category)=><option value={category.id}>{category.categoryName}</option>
                                )

                                }
                                
                                
                            </select>
                        </div>
                        <div className={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label htmlFor="productPrice">ÜRÜN FİYAT</label>
                            <input type="number" {...register("price")} id="productPrice" min="0" step="0.01" required />
                        </div>
                        <div className={`${style.data} ${ style.scaledWidth} ${style.inclusive}`}>
                            <label htmlFor="productStock">ÜRÜN STOK MİKTARI</label>
                            <input type="number" {...register("unitsInStock")} id="productStock" min="1" pattern="[0_9]" required />
                        </div>
                        <div className={`${style.data} ${ style.widthOneHundred} ${style.inclusive}`}>
                            <label htmlFor="description">ÜRÜN AÇIKLAMASI</label>
                            <textarea {...register("description")} id="description" rows={5} required></textarea>
                        </div>
                        <input type="submit" value="ÜRÜN EKLE"/>
                    </form>
                </div>
                
            
            
               




                
    </>
  )
}

export default AddProduct