
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Usepostdata from '../../customHooks/Usepostdata';
import styles from './signup.module.css'

const Signup = () => {
    const navigate = useNavigate();
 const{register,handleSubmit}=useForm();
const[data,setData]=useState({url:"",object:{firstname:"",lastname:"",
email:"",password:"",contact:""}})


const customer=useSelector(state=>state.customer.customer)


 const success=Usepostdata(data)
    
 
 
    const onsubmit=(data)=>{

        console.log("react formdan geldi "+JSON.stringify(data) );
        setData({url:"https://localhost:44301/api/customers/add",object:data});
        console.log("kayıt  durumu: "+JSON.stringify(success));
        
      
    }
  
   if(success.success=true){
        
        const createChart=Usepostdata({url:"https://localhost:44301/api/cart/add",object:{dateCreated:Date.now(),customerID:`${customer.customerID}`}})
        navigate("/home")
    }
    
    

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
                    <input type="tel" {...register("contact")} id="phone" pattern="[0_9]{3}[0_9]{3}[0_9]{2}[0_9]{2}"/>
                </div>
               <input type="submit"  value="KAYIT OL"/>
            </form>
        </div>
    </div>
  </Fragment>
  )
}

export default Signup