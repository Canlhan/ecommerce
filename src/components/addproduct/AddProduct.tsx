import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import VendorContext from '../../context/vendorContext';
import { getAllCategories } from '../../service/categoryService/CategoryService';
import { saveVendorProduct } from '../../service/vendorProductService/VendorProductService';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { VendorProduct } from '../models/VendorProduct';
import { VendorProductRequest } from '../models/VendorProductRequest';
import firebase from 'firebase/app';
import{getStorage,ref, uploadBytes} from 'firebase/storage';
const AddProduct = ({style}) => 
{   
    useEffect(()=>{
        getAllCategories().then((response)=>{

            setCategories(response);
            console.log(JSON.stringify(response));
        });
    },[])

    
    
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
    const[photo,setphoto]=useState<Blob>();
    
   
   
   // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyCiV2KNRqf9D7EYwO4cxZNKaS1IJo-sdFo",
        authDomain: "ecommerce-feef4.firebaseapp.com",
        projectId: "ecommerce-feef4",
        storageBucket: "ecommerce-feef4.appspot.com",
        messagingSenderId: "893245861405",
        appId: "1:893245861405:web:d126ed614bd21210e720f4",
        measurementId: "G-EFHSBECN7J"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      // Firebase'i başlatın
    
      const storage=getStorage(app)

      // Yüklemek istediğiniz dosyayı seçin
     // Dosyayı seçmek için uygun bir yöntem kullanın
      
      // Dosyayı Firebase Storage'a yükleyin
     
   
    
     const onsubmit=(data)=>{
       
       const category:Category[]=categories.filter((categorys)=>categorys.id==data.id);
       const product:Product={
            category:category[0],
            productName:data.productName,
            productPhoto:"yok",
            state:true,
            unitInStock:data.unitsInStock,
            unitPrice:data.price,
                
       }
       
       const{orders,...vendorremain}=vendor;
      // const vendorProduct:VendorProduct={...data,productPhoto:null,vendor:vendor};
      const vendorProduct:VendorProductRequest={
          description:data.description,
          price:data.price,
          product:product,
          quantity:data.unitsInStock,        
          vendor:{...vendorremain,orders:[]}
          
      }
      
      console.log("vendor product: "+JSON.stringify(vendorProduct))
    const token=localStorage.getItem("token");
      
      

      saveVendorProduct(vendorProduct,token).then((response)=>{
          console.log("saved vendor"+response)
      })
      .catch((er)=>{

        console.log("error: "+JSON.stringify(er))
      })
      
      console.log("vendor id for image: "+vendorId)
      const storageRef=ref(storage,`images/${product.productName}`)

      if(photo !=undefined){
        uploadBytes(storageRef,photo).then((response)=>{
            alert("image başarılır")
        })
      }
     
    }

    const fileinput=(e)=>{

        console.log(e.target.files[0])
        setphoto(e.target.files[0]); 
        if (backref.current) {
            backref.current.style.backgroundImage = `url("${URL.createObjectURL(e.target.files[0])}")`;
          }
          const image={images:e.target.files[0],vendor:vendorId}
         
    }
    

    

    

    /*
    useEffect(()=>{

        if(product!==null){
            addProduct();
        }

    },[product])

*/
    const addImage=async(image)=>{
        
        
        console.log(image)
        const response = await fetch("",{
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