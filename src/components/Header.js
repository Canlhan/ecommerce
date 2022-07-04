import React, { Fragment } from "react";
import style from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { FaSearch,FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img
            src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
            alt=" yok"
          />
        </div>
        <nav>
                <div className={style.home}>
                    <NavLink className={style.link} to="/home">ANASAYFA</NavLink>
                </div>
                <div className={style.rightside}>
                    <div >
                        <FaSearch/>
                    </div>
                    
                    <NavLink to="/login">
                        
                                    <FaUserAlt/>                  
                    </NavLink>

                    
                    

                </div>
        </nav>
       
      </div>
    </Fragment>
  );
};

export default Header;
