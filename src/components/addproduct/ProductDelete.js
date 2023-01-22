


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductDeleteFeedback from './feedbacks/ProductDeleteFeedback'
import style from './ProductDelete.module.css'
import VendorProductDelete from './VendorProductDelete/VendorProductDelete';
const ProductDelete = ({product}) => {

    const BASE_URL="https://localhost:44301/api/";
    const[isdeleteId,setDelete]=useState(null);
const navigate=useNavigate();
    const[getvendorProducts,setVendorProducts]=useState([]);
    const vendorId=localStorage.getItem("sellerId");

    const[deletedVendorProduct,setDeleteVendorProduct]=useState(null);
    const[deleteProduct,setDeleteProduct]=useState(null);


    const vendorProducts=async()=>{
    
        const url=BASE_URL+`VendorProducts/getallbyvendorid/${vendorId}`
        const result=await fetch(url);
        const resultjson= await result.json();

        if(resultjson!==undefined){
            setVendorProducts(resultjson.data);
            console.log(resultjson)
        }
    
    }
    
    useEffect(()=>{
                console.log("sdfsdfsdfsdffd")
                vendorProducts();
    },[])

   

    

    const deleteProductt=  async ()=>{

        console.log(deletedVendorProduct);
        console.log(deleteProduct);
        const url=BASE_URL+`Products/deleteVenProduct/${deletedVendorProduct}/${deleteProduct}`
        const result=await fetch(url);
        const resultjson= await result.json();
        
    
        if(resultjson!==undefined){
            
            setDeleteProduct(resultjson.data);
        }

    }


    useEffect(()=>{

        if(deletedVendorProduct!==null &&  deleteProduct!==null){
            deleteProductt();
            window.location.reload(true)
        }
       

    },[deletedVendorProduct,deleteProduct])
  return (

    <>
    
    <div class={`${style.product_deletion_page} ${style.page}`}>
                
                
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
                        
                        {
                            getvendorProducts.map((vendorProduct)=>{
                            
                                return  <VendorProductDelete setId={setDeleteVendorProduct} setProductıd={setDeleteProduct} product={vendorProduct}  style={style}/>
                            
                            })
                        }
                      
                        
                    </tbody>
                </table>
            </div>
    </>
  )
}

export default ProductDelete