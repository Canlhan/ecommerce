

import React, { useState } from 'react'
import AddProduct from '../components/addproduct/AddProduct'
import ProductDelete from '../components/addproduct/ProductDelete';
import ProductOrderAccept from '../components/addproduct/ProductOrderAccept';
import ProductOrder from '../components/addproduct/ProductOrderAccept';

import ProductStock from '../components/addproduct/ProductStock';
import style from './Addproductvendor.module.css'
import Modal from './Modal';

const AddProductVendor = () => {
  
    const [menutog,setmenutog]=useState(false);

    const[isPage,setPage]=useState({isAdd:true,isDelete:false,isUpdate:false,isCartInfo:false});
   
    const[isOpen,setOpen]=useState(true)

    const togglelefmenu=()=>{

        setmenutog(!menutog);
    }

  const closeModal=()=>{

    setOpen(false)
  }
    
    return (
    <>
           

                <div class={style.container}>
                        <Modal isOpen={isOpen} onClose={closeModal}/>

                    <div class={`${style.navigation} ${ menutog? style.active:""} `}>
                        <ul class={`${style.navigation_list} ${style.addul}` }>
                            <li class={style.navigation_list_item}>
                                <div className={`${style.menuoptions} ${isPage.isAdd && style.active}`}  onClick={()=>setPage({isAdd:true,isDelete:false,isUpdate:false,isCartInfo:false})} >
                                    <span class={style.icon}><i class="fas fa-shopping-cart"></i></span>
                                    <span class={style.title}>ÜRÜN EKLEME</span>
                                </div>
                            </li>
                            <li class={style.navigation_list_item}>
                                <div className={`${style.menuoptions} ${isPage.isUpdate && style.active}`}  onClick={()=>setPage({isAdd:false,isDelete:false,isUpdate:true,isCartInfo:false})}>
                                    <span class={style.icon}><i class="fas fa-comments"></i></span>
                                    <span class={style.title}>ÜRÜN GÜNCELLEME</span>
                                </div>
                            </li>
                            <li class={style.navigation_list_item}>
                                <div className={`${style.menuoptions} ${isPage.isDelete && style.active}`}  onClick={()=>setPage({isAdd:false,isDelete:true,isUpdate:false,isCartInfo:false})}>
                                    <span class={style.icon}><i class="fas fa-heart"></i></span>
                                    <span class={style.title}>ÜRÜN SİLME</span>
                                </div>
                            </li>
                            <li class={style.navigation_list_item}>
                                <div className={`${style.menuoptions} ${isPage.isCartInfo && style.active}`}  onClick={()=>setPage({isAdd:false,isDelete:false,isUpdate:false,isCartInfo:true})}>
                                    <span class={style.icon}><i class="fas fa-address-card"></i></span>
                                    <span class={style.title}>SİPARİŞ ONAYLAMA</span>
                                </div>
                            </li>
                        </ul>
                <div class={style.toggle} onClick={togglelefmenu}>
                    
                </div>

                </div>

                <div class={style.page_content}>
                    {
                        isPage.isAdd && <AddProduct style={style}/>
                    }
                    {
                        isPage.isCartInfo && <ProductOrderAccept style={style}/>
                    }

                    {
                        isPage.isDelete && <ProductDelete style={style}/>
                    }
                    {
                        isPage.isUpdate && <ProductStock style={style}/>
                    }
                
                
                </div>


                
                </div>
    </>
  )
}

export default AddProductVendor