

import React, { useState } from 'react'
import AddProduct from '../components/addproduct/AddProduct'
import style from './Addproductvendor.module.css'

const AddProductVendor = () => {
  
    const [menutog,setmenutog]=useState(false);
    const togglelefmenu=()=>{

        setmenutog(!menutog);
    }
  
    
    return (
    <>

                <div class={style.container}>
                <div class={`${style.navigation} ${ menutog? style.active:""} `}>
                        <ul class={`${style.navigation_list} ${style.addul}` }>
                            <li class={style.navigation_list_item}>
                                <a href="#">
                                    <span class={style.icon}><i class="fas fa-shopping-cart"></i></span>
                                    <span class={style.title}>SİPARİŞLERİM</span>
                                </a>
                            </li>
                            <li class={style.navigation_list_item}>
                                <a href="#">
                                    <span class={style.icon}><i class="fas fa-comments"></i></span>
                                    <span class={style.title}>MESAJLARIM</span>
                                </a>
                            </li>
                            <li class={style.navigation_list_item}>
                                <a href="#">
                                    <span class={style.icon}><i class="fas fa-heart"></i></span>
                                    <span class={style.title}>TAKİP ETTİKLERİM</span>
                                </a>
                            </li>
                            <li class={style.navigation_list_item}>
                                <a href="#">
                                    <span class={style.icon}><i class="fas fa-address-card"></i></span>
                                    <span class={style.title}>ADRESİM</span>
                                </a>
                            </li>
                        </ul>
                <div class={style.toggle} onClick={togglelefmenu}>
                    
                </div>

                </div>



                <AddProduct style={style}/>
                </div>
    </>
  )
}

export default AddProductVendor