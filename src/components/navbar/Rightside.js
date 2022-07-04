import React, { Fragment } from 'react'
import { FaSearch,FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import style from '../../styles/navbarcss/Rightside.module.css'




const Rightside = () => {


  return (
    <Fragment>
        <div className={style.rightside}>
                    <div className={style.search} >
                        <FaSearch/>
                    </div>
                    
                    <NavLink to="/login">
                        <FaUserAlt/>                  
                    </NavLink>

                    
                    

                </div>
    </Fragment>
  )
}

export default Rightside