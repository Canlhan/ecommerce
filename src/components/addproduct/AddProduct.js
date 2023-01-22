import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import Usefetchdata from '../../customHooks/Usefetchdata';
import Usepostdata from '../../customHooks/Usepostdata';


const AddProduct = ({style}) => 
{   
    const BASE_URL="https://localhost:44301/api/";
    const formdata=new FormData();

   const[product,setProduct]=useState(null);
    const[addeedProdcut,setAddedProduct]=useState();


    const[isSucces,setSucces]=useState(false);
    const vendorId=localStorage.getItem("sellerId");
    console.log(vendorId);
    const{register,handleSubmit}=useForm();
    const categories=Usefetchdata("https://localhost:44301/api/category/getall");
    console.log(categories);

    
    const backref=useRef();

    const[photo,setphoto]=useState(null);
    const[photoadded,setAddPhoto]=useState(null);
   

    const onsubmit=(data)=>{
       console.log("product eklenen "+JSON.stringify({...data,ProductPhoto:null}))
        setProduct({...data,productPhoto:null,VendorID:vendorId});
    }

    const fileinput=(e)=>{

        console.log(e.target.files[0])
        setphoto(e.target.files[0]); 
        backref.style.backgroundImage=`url("${URL.createObjectURL(e.target.files[0])}")`
        
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

    useEffect(()=>{

        if(product!==null){
            addProduct();
        }

    },[product])


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

    useEffect(()=>{
        console.log("formdata sounda yüklendi")
        if(isSucces!==false && addeedProdcut!==undefined){
            console.log(photo);
            console.log("product undefined değil ve formdataya append olacak ")

            formdata.append('image',photo);
            console.log("ProductID: "+addeedProdcut.productID);
            
            formdata.append('ProductID',addeedProdcut.productID);
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


   
    
  return (

    <>
        
                <div class={style.product_add_page}>
                    <form encType="multipart/form-data"  onSubmit={handleSubmit(onsubmit)}>
                        <div class={`${style.data} ${style.widthOneHundred}`}>
                            <div class={style.product_image} ref={backref}>
                                
                            </div>
                            <input type="file" id="file" onChange={fileinput} accept="image/x-png,image/gif,image/jpeg"
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
                            <input type="number" {...register("Price")} id="productPrice" min="0" step="0.01" required />
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
                
            
            
               




                
    </>
  )
}

export default AddProduct