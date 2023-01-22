

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const CustomeLogin = ({style,activefalse,isactive}) => {
  const BASE_URL="https://localhost:44301/api/";

  const[formCustomer,setFormCustomer]=useState(null);
  const[isLogin,setLogin]=useState(false);
  const navigate=useNavigate();
 
 

  

    const{register,handleSubmit}=useForm();

    const switchtoseller=()=>{

        activefalse();
    }

    const onsubmit=(data)=>{

      console.log(data);
      setFormCustomer(data);
   } 
    const checkRoles=async()=>{

      const url=BASE_URL+`Customers/getcustomerbyemail/${formCustomer.email}`
      const result=await fetch(url);
      const json=await result.json();
      const customer=json.data;
      console.log("customer: "+customer)
      if(customer!==null){
          
          console.log("satıcı girdi: "+isLogin);
              localStorage.setItem("customerId",customer.id);
              localStorage.setItem("customer","customer");
              navigate("/home");
      }else{
        alert("böyle bir kullanıcı yok");
      }
     
     
      

  }
 
  useEffect(()=>{

      if(formCustomer!=null){
          
          checkRoles();
         
      
      }
      

  },[formCustomer])

  return (
    <>
    
    <div className={`${style.component}   ${style.customer} ${isactive ? style.customeractive:""}`}>
            <div className={style.customerBox}>
                <h1>CUSTOMER</h1>
                <form  onSubmit={handleSubmit(onsubmit)}>
                    <input type="email"  {...register("email")} id="custEmail" placeholder="E_mail Address" required/>
                    <input type="text" {...register("password")} id="custPswd" placeholder="Password" required/>
                    <div className={style.signandloginnear}>
                    <button  type="submit">LOGIN</button>
                    <Link to="/signup"><button type="submit">SİGN UP</button></Link>
                    </div>
                    
                    
                </form>
                
                 <button onClick={switchtoseller} className={style.loginPages}>SELLER LOGIN PAGE</button>
            </div>
        </div>
    
    </>
  )
}

export default CustomeLogin