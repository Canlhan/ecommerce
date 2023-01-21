

import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const CustomeLogin = ({style,activefalse,isactive}) => {


    const{register,handleSubmit}=useForm();

    const switchtoseller=()=>{

        activefalse();
    }



  return (
    <>
    
    <div className={`${style.component}   ${style.customer} ${isactive ? style.customeractive:""}`}>
            <div className={style.customerBox}>
                <h1>CUSTOMER</h1>
                <form action="/home" onSubmit={handleSubmit(onsubmit)}>
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