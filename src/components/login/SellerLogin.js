



import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getAuthority, loginUser } from '../../service/UserService';
import VendorContext from '../../context/vendorContext';
import { getVendorByEmail } from '../../service/VendorService';

const SellerLogin = ({style,activetrue}) => {

    const[isLogin,setLogin]=useState(false);
    const navigate=useNavigate();
    
    const{setVendor}=useContext(VendorContext);
    const{register,handleSubmit}=useForm();

    const switchtocustomer=()=>{
        activetrue();
    }
    
    const onsubmit=(data)=>{
        loginVendor(data);
    }

    const loginVendor = (data) => {
        loginUser(data)
          .then((response) => {
            localStorage.setItem("token", response);
            const authority = getAuthority(response);
            setLogin(true);
            localStorage.setItem("role", authority);
           
            
            if (authority !== "ROLE_VENDOR") {
                alert("satıcı değilsiniz...");
                setLogin(false);
                localStorage.removeItem("role");
                localStorage.removeItem("token");
            }
            getVendorByEmail(data.email)
                    .then((vendorResponse) => {
                        const vendor = vendorResponse;
                        setVendor(vendor);
                    })
                    .catch((error) => {
                        console.log("Error fetching vendor information: " + error);
                        setLogin(false);
                    });
                
                })
                .catch((error) => {
                    setLogin(false);
                    console.log(error)
                    alert("satıcı değilsiniz 1 "+error);
                });
      };


    
      useEffect(()=>{

        if(isLogin){
            navigate("/addproduct")
        }
      },[isLogin])
      
    /*
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