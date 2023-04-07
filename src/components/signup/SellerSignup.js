

import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import VendorContext from '../../context/vendorContext.tsx';
import { createVendor } from '../../service/UserService';
import styles from './signup.module.css'


const SellerSignup = () => {

    const BASE_URL="https://localhost:44301/api/";
    const{register,handleSubmit}=useForm();
    const navigate=useNavigate();
    const{vendor,setVendor}=useContext(VendorContext);

    


    const onsubmit=(data)=>{

        console.log("react formdan geldi "+JSON.stringify(data));
        createVendor(data).then((response)=>{
            setVendor(response)
            console.log("response vendor: "+JSON.stringify(response));
        })
         //console.log("kayıt  durumu: "+JSON.stringify(success));     
    }

    useEffect(()=>{
       

    },[vendor])

/*
    const addSeller=async()=>{

        const url=BASE_URL+"Auth/vendorregister";
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(seller)
        })
        .then((response) => {
            if(response.ok){

                return response.json();
            }
            if(response.status==400){

                throw new Error(" böyle bir kullanıcı var");

            }
            
            throw new Error("tekrar deneyin");
           
            
          
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
        if(seller!=null){

            
                addSeller();
           
            
            
        }
            
    },[seller])
    */
  return (
    <>
    
    <div className={`${styles.container} ${styles.sellerbackground}`}>
        <div className={styles.form_container}>
            <h2>KAYIT OL</h2>
            <form className={styles.form} onSubmit={handleSubmit(onsubmit)}>
                <div className={styles.data}>
                    <label for="name">AD</label>
                    <input type="text" {...register("name")} id="name"/>
                </div>
                <div className={styles.data}>
                    <label for="lastname">SOYAD</label>
                    <input type="text" {...register("lastName")} id="lastname"/>
                </div>
                
                <div className={styles.data}>
                    <label for="mail">E_MAİL</label>
                    <input type="email" {...register("email")} id="mail"/>
                </div>
                
                <div className={styles.data}>
                    <label for="password">ŞİFRE</label>
                    <input type="password" {...register("password")} id="password"/>
                </div>
                
                <div className={styles.data} style={{width:'100%'}}>
                    <label for="phone">TEL</label>
                    <input type="tel"  {...register("contact")} id="phone" pattern="[0-9]{10}"/>
                </div>
                <div className={styles.data}>
                    <label for="address">ADRES</label>
                    <textarea type="text" rows="4" style={{width:'100%',backgroundColor:'rgba(0, 0, 0, .6)',color:'white',border:'none',outline:'none'}}
                     {...register("address")} id="address"  />
                </div>
                
               <input type="submit"  value="KAYIT OL"/>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default SellerSignup