import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Usewindowsize from "../../customHooks/usewindowsize";

import style from './Navbar.module.css'
import{chartActions} from "../../store/chart-slice"

const Navbar = () => {

  const [isOpenMenuList,setMenuList]=useState(true);
  const [firstMenu,setFirstMenu]=useState(true);

  // burada redux yapısını kullandım

   const isOpenChart=  useSelector( state=> state.chart.isOpenChart)
   const dispatch=useDispatch();
  const[height,width]=Usewindowsize();

  const handlegetChart=()=>{

    
    dispatch(chartActions.toggleChart());
    console.log(isOpenChart)
  }
 // burada bitti 

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
          <Link to='/' style={{color:'white'}}> buca.</Link> 
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
            <i onClick={handlegetChart} className="fas fa-shopping-bag"></i>
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
