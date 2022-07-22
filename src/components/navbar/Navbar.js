import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usewindowsize from "../../customHooks/usewindowsize";
import BrandPromotion from "../BrandPromotion";
import style from './Navbar.module.css'

const Navbar = () => {

  const [isOpenMenuList,setMenuList]=useState(true);
  const [firstMenu,setFirstMenu]=useState(true);

  
  const[height,width]=Usewindowsize();

 

  useEffect(()=>{

    if(width<1100)
    {
        setMenuList(false);
        
        
    }else{
      setMenuList(true);
      
    }

  },[width])

  

  const menuItemHandler=()=>{
    

        setFirstMenu(!firstMenu);
   }
   // menulist closed 
  return (

    <Fragment>
      <nav>
        <div id={style.websiteName} className="">
          buca.
        </div>
        
        <ul  className={`${  style.menu_list}  ${ isOpenMenuList || firstMenu ? style.closed:''} ${isOpenMenuList ? style.animation:''} `} >
          <li   className={style.menu_list_item}>
           <Link to="/shop">SHOP</Link>
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
          <li id={style.menu_item}  onClick={menuItemHandler} className={`${style.icon_list_item} ${style.invisible}`}>
            <i className="fas fa-bars"></i>
          </li>
        </ul>
       
      </nav>
    </Fragment>
  );
};

export default Navbar;
