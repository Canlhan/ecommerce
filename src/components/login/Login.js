import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Usefetchdata from '../../customHooks/Usefetchdata'
import Usepostdata from '../../customHooks/Usepostdata'
import { customerActions } from '../../store/customer-slice'
import  './login.css'

const Login = () => {

    const dispatch=useDispatch();
    const customerredux=useSelector((state)=>state.customer.customer);

    const[data,setData]=useState({object:{email:"",password:""}})

    const [addedClassNameForSwitchCustomerSeller,setSwitchCustomerSeller]=useState(false)

    const navigate=useNavigate();
    const{register,handleSubmit}=useForm();

    const handlerSwitchcustomerSeller=()=>{

        setSwitchCustomerSeller(!addedClassNameForSwitchCustomerSeller);
    }
    
   
   
    
    
    
    const onsubmit=(data)=>{

            console.log(data)
            setData(data);  
    }

    const customer=Usefetchdata(`https://localhost:44301/api/customers/getcustomerbyemail/${data.email}`);
    console.log("render oldu customer: "+customer);
    console.log("**********************************")
    useEffect(()=>{
        console.log("use girdi")
        if(customer!=null){
            dispatch(customerActions.addCustomer(data));
            console.log("null değile girdi"+customerredux.email);
            const createChart=Usepostdata({url:"https://localhost:44301/api/cart/add",object:{dateCreated:Date.now(),customerID:`${customer.customerID}`}})

            console.log(customer+" için  "+createChart+" sepeti oluşturuldu")
            navigate("/home")
            
        }
        

    },[customer])
    
    
   
    
   

  return (
    <Fragment>
        <div class="containerl">
        <div class="component sellerPicture"></div>

        <div class={`component  ${ addedClassNameForSwitchCustomerSeller?"active":""}  customer`}>
            <div class="customerBox">
                <h1>CUSTOMER</h1>
                <form action="/home" onSubmit={handleSubmit(onsubmit)}>
                    <input type="email"  {...register("email")} id="custEmail" placeholder="E-mail Address" required/>
                    <input type="text" {...register("password")} id="custPswd" placeholder="Password" required/>
                    <div className='signandloginnear'>
                    <button  type="submit">LOGIN</button>
                    <Link to="/signup"><button type="submit">SİGN UP</button></Link>
                    </div>
                    
                    
                </form>
                
                 <button onClick={handlerSwitchcustomerSeller} class="loginPages">SELLER LOGIN PAGE</button>
            </div>
        </div>

        <div class="component seller">
            <div class="sellerBox">
                <h1>SELLER</h1>
                <form action="">
                    <input type="email" name="emailAddress" id="sellEmail" placeholder="E-mail Address" required/>
                    <input type="text" name="password" id="sellPswd" placeholder="Password" required/>
                    <div className='signandloginnear'>
                        <Link to="/profile/vendor"> <button type="submit">LOGIN</button></Link>
                        <Link to="/signup"><button type="submit">SİGN UP</button></Link>
                    </div>
                    
                </form>
                <button onClick={handlerSwitchcustomerSeller} class="loginPages">CUSTOMER LOGIN PAGE</button>
            </div>
        </div>
        <div class={`component ${addedClassNameForSwitchCustomerSeller?"active":""}  customerPicture`}></div>
    </div>
    </Fragment>
  )
}

export default Login