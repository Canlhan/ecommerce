



import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SellerLogin = ({style,activetrue}) => {



    const switchtocustomer=()=>{
        activetrue();
    }
    
  return (
    <>
    
    <div className={`${style.component} ${style.seller}`}>
            <div className={style.sellerBox}>
                <h1>SELLER</h1>
                <form action="">
                    <input type="email" name="emailAddress" id="sellEmail" placeholder="E_mail Address" required/>
                    <input type="text" name="password" id="sellPswd" placeholder="Password" required/>
                    <div className={style.signandloginnear}>
                        <Link to="/profile/vendor"> <button type="submit">LOGIN</button></Link>
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