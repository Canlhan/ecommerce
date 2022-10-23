import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import  './login.css'

const Login = () => {

    const [addedClassNameForSwitchCustomerSeller,setSwitchCustomerSeller]=useState(false)

    const handlerSwitchcustomerSeller=()=>{

        setSwitchCustomerSeller(!addedClassNameForSwitchCustomerSeller);
    }

  return (
    <Fragment>
        <div class="containerl">
        <div class="component sellerPicture"></div>

        <div class={`component  ${ addedClassNameForSwitchCustomerSeller?"active":""}  customer`}>
            <div class="customerBox">
                <h1>CUSTOMER</h1>
                <form action="/homepage" >
                    <input type="email" name="emailAddress" id="custEmail" placeholder="E-mail Address" required/>
                    <input type="text" name="password" id="custPswd" placeholder="Password" required/>
                    <div className='signandloginnear'>
                    <Link to="/home"><button type="submit">LOGIN</button></Link>
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