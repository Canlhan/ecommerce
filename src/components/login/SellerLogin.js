



import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SellerLogin = ({style,activetrue}) => {
    const BASE_URL="https://localhost:44301/api/";
    const[enteredSeller,setSeller]=useState(null);
    const[isLogin,setLogin]=useState(false);
    const navigate=useNavigate();
    const[role,setRole]=useState({id:null,name:""});
    const{register,handleSubmit}=useForm();

    const[enteredVendor,setVendor]=useState();
    const switchtocustomer=()=>{
        activetrue();
    }
    
    const onsubmit=(data)=>{

        setSeller(data);
    }
    // check roleeeeeeeeeeeeeeeeee
    const checkRoles=async()=>{

        const url=BASE_URL+`Vendor/getvendorbyemail/${enteredSeller.email}`
        const result=await fetch(url);
        const json=await result.json();
        const vendor=json.data;
        if(vendor!==undefined){
            
            console.log("satıcı girdi: "+isLogin);
            localStorage.setItem("sellerId",vendor.vendorID);
            console.log("satıcı id: "+JSON.stringify(vendor))
            localStorage.setItem("seller","vendor");
            navigate("/addproduct");
        }
       
       
        

    }
   
    useEffect(()=>{

        if(enteredSeller!=null){
            
            checkRoles();
           
        
        }
        

    },[enteredSeller])
// check roleeeeeeeeeeeeeeeeee finish

//login
/*
    const login=async()=>{
        const url=BASE_URL+"Auth/login"

        const result=await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(enteredSeller)
        }).then((response)=>
        {
            if(response.ok){
                
                

                return response.json();
            }
            if(response.status==400){

                throw new Error(" böyle bir kullanıcı yok");

            }
        }
           
        ).catch((error)=>{

               // alert("böyle bir kullanıcı yok ")
        });
        console.log("sdfsdfsdf : "+JSON.stringify(result));
    }


    useEffect(()=>{

        if(isLogin){
            login();
        }
        
    },[isLogin])

   
   
*/
//login******************************************************
    

  return (
    <>
    
    <div className={`${style.component} ${style.seller}`}>
            <div className={style.sellerBox}>
                <h1>SELLER</h1>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <input type="email"  {...register("email")} id="sellEmail" placeholder="E_mail Address" required/>
                    <input type="text" {...register("password")} id="sellPswd" placeholder="Password" required/>
                    <div className={style.signandloginnear}>
                         <button type="submit">LOGIN</button>
                        <Link to="/sellersignup"><button type="submit">SİGN UP</button></Link>
                    </div>
                    
                </form>
                <button onClick={switchtocustomer} className={style.loginPages}>CUSTOMER LOGIN PAGE</button>
            </div>
        </div>
    
    </>
  )
}

export default SellerLogin;