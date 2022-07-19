import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BrandPromotion from "../BrandPromotion";
import style from './Navbar.module.css'

const Navbar = () => {
  
  return (
    <Fragment>
      <nav>
        <div id={style.websiteName} className="">
          buca.
        </div>
        <ul className={`${style.menu_list} ${style.closed} ${style.animation}`} >
          <li className={style.menu_list_item}>
           <Link to="/shop"> SHOP</Link>
          </li>
          <li className={style.menu_list_item}>
          <Link to="/brands"> BRANDS</Link>
          </li>
          <li className={style.menu_list_item}>
            
            <Link to="/myboyfriendback"> MY BOYFRIENDS BACK</Link>
          </li>
          <li className={style.menu_list_item}>
            
            <Link to="/staffedit"> STAFF EDIT</Link>
          </li>
        </ul>
        <ul className={style.icon_list}>
          <li className={style.icon_list_item}>
            <i className="fas fa-user"></i>
          </li>
          <li className={style.icon_list_item}>
            <i className="fas fa-search"></i>
          </li>
          <li className={style.icon_list_item}>
            <i className="fas fa-shopping-bag"></i>
          </li>
          <li id={style.menu_item} className={`${style.icon_list_item} ${style.invisibble}`}>
            <i className="fas fa-bars"></i>
          </li>
        </ul>
       
      </nav>
    </Fragment>
  );
};

export default Navbar;
