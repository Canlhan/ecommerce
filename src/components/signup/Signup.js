

import moment from 'moment';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CustomerContext from '../../context/customerContext';
import Usepostdata from '../../customHooks/Usepostdata';
import { createCart } from '../../service/cartService/chartService';
import { createCustomer} from '../../service/UserService';
import styles from './signup.module.css'

const Signup = () => {
    
    const navigate = useNavigate();
    const{register,handleSubmit}=useForm();
   

    const {customer,setCustomer}=useContext(CustomerContext);

    const[customecart,setCartCustomer]=useState(null);
 
    const onsubmit=(data)=>{
        createCustomer(data).then((response)=>{
         setCustomer(response);
         setCartCustomer(data);
         
        console.log("response: "+JSON.stringify(data));
       });
       
    }

    useEffect(()=>{
        console.log("customerrrr: "+JSON.stringify(customer))
        if(customer!=null){
            const {token,...customersplit}=customer;
            const cust={...customersplit,email:customecart.email}
            console.log("resssss: "+JSON.stringify(customer));
            console.log("resssss: "+JSON.stringify(customersplit));
            createCart(cust);
            navigate("/home")
        }
        
    },[customer])
    
  
    /*
    const customer=useSelector(state=>state.customer.customer)
    const success=Usepostdata(data)
    const registerCustomer= async ()=>{

        const url=BASE_URL+"Auth/customerregister";
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
        });

    },[addedcustomer])

   if(success.success=true){
        
        const createChart=Usepostdata({url:"https://localhost:44301/api/cart/add",object:{dateCreated:Date.now(),customerID:`${customer.customerID}`}})
        navigate("/home")
    }*/
    
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