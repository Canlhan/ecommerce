import React, { Fragment } from "react";
import style from "../../styles/navbarcss/Header.module.css";
import { NavLink } from "react-router-dom";
import Rightside from "./Rightside";

import logo from '../../assets/images/logo_200x200.png'
const Header = () => {

    
  return (
    <Fragment>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img
            src={logo}
            alt=" yok"
          />
        </div>
        <nav>
                <div className={style.home}>
                    <NavLink className={style.link} to="/home">ANASAYFA</NavLink>
                </div>
                <Rightside/>
                
        </nav>
       
      </div>
    </Fragment>
  );
};

export default Header;
