

import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Usepostdata from '../../customHooks/Usepostdata';
import styles from './signup.module.css'

const Signup = () => {
    const BASE_URL="https://localhost:44301/api/";
    const navigate = useNavigate();
    const{register,handleSubmit}=useForm();
    const [addedcustomer,setcustomer]=useState(null);
    const[data,setData]=useState({url:"",object:{firstname:"",lastname:"",
    email:"",password:"",contact:""}})


const customer=useSelector(state=>state.customer.customer)


 const success=Usepostdata(data)
    
 
 
    const onsubmit=(data)=>{

        console.log("react formdan geldi "+JSON.stringify(data) );

        setcustomer(data);
        console.log("kayıt  durumu: "+JSON.stringify(success));
        
       
    }
  
    const registerCustomer= async ()=>{

        const url=BASE_URL+"Auth/register";
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(addedcustomer)
        });

    }
    useEffect(()=>{
        
        if(addedcustomer!=null){
            registerCustomer();
            alert("başarılı bir şekilde kayıt oldunuz....")
        }
       
        /*
        const result =await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(product)
        });*/

    },[addedcustomer])

   if(success.success=true){
        
        const createChart=Usepostdata({url:"https://localhost:44301/api/cart/add",object:{dateCreated:Date.now(),customerID:`${customer.customerID}`}})
        navigate("/home")
    }
    
    // fetch customer 

  return (

  <Fragment>
     
        <div className={styles.container}>
        <div className={styles.form_container}>
            <h2>KAYIT OL</h2>
            <form className={styles.form} onSubmit={handleSubmit(onsubmit)}>
                <div className={styles.data}>
                    <label for="name">AD</label>
                    <input type="text" {...register("firstName")} id="name"/>
                </div>
                <div className={styles.data}>
                    <label for="surName">SOYAD</label>
                    <input type="text" {...register("lastName")} id="surName"/>
                </div>
                <div className={styles.data}>
                    <label for="dateOfBirth">DOĞUM TARİHİ</label>
                    <input type="datetime-local" {...register("date")} id="dateOfBirth"/>
                </div>
                <div className={styles.data}>
                    <label for="mail">E_MAİL</label>
                    <input type="email" {...register("email")} id="mail"/>
                </div>
                
                <div className={styles.data}>
                    <label for="password">ŞİFRE</label>
                    <input type="password" {...register("password")} id="password"/>
                </div>
                
                <div className={styles.data}>
                    <label for="phone">TEL</label>
                    <input type="tel" {...register("contact")} id="phone" pattern="[0-9]{10}"/>
                </div>
                <div className={styles.data}>
                    <label for="name">Cinsiyet</label>
                    <div className={styles.genderoptions}>
                        <div className={styles.genderoption}>
                                <input type="radio" {...register("gender")} required id="gender" value="erkek"/> <span>Erkek</span>
                        </div>

                       <div className={styles.genderoption}>
                                <input type="radio" {...register("gender")} id="gender" value="kadın"/> <span>Kadın</span>
                       </div>

                       <div className={styles.genderoption}>
                            <input type="radio" {...register("gender")} id="gender" value="diğer"/> <span>Diğer</span>
                       </div>
                       
                        
                    </div>
                    
                </div>
               <input type="submit"  value="KAYIT OL"/>
            </form>
        </div>
    </div>
  </Fragment>
  )
}

export default Signup