import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Usefetchdata from '../../customHooks/Usefetchdata'
import Usepostdata from '../../customHooks/Usepostdata'
import { customerActions } from '../../store/customer-slice'
import CustomeLogin from './CustomeLogin'

import style from  './login.module.css'
import SellerLogin from './SellerLogin'

const Login = () => {

    const dispatch=useDispatch();
    const customerredux=useSelector((state)=>state.customer.customer);

  

    const [addedClassNameActive,setSwitchCustomerSeller]=useState(false)

   

    const handlerSwitchcustomerSeller=()=>{

        setSwitchCustomerSeller(!addedClassNameActive);
    }
    
   
   const activefalse=()=>{

    setSwitchCustomerSeller(false);
   }
   const activetrue=()=>{

    setSwitchCustomerSeller(true);
    console.log("sdfsd "+addedClassNameActive);
   }
    
    
    
  
    
   
    
   

  return (
    <Fragment>
        <div className={style.containerl}>
        <div className={`${style.component} ${style.sellerPicture}`}></div>


            <CustomeLogin isactive={addedClassNameActive} style={style}  activefalse={activefalse}/>
                
            

        
            <SellerLogin style={style} activetrue={activetrue}/>    

        
        <div className={` ${style.component}  ${style.customerPicture} ${addedClassNameActive ?style.customerPictureactive:""}  `}></div>
    </div>
    </Fragment>
  )
}

export default Login