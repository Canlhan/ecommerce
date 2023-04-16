import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/Shop/Card'
import CustomerContext from '../context/customerContext'
import Usefetchdata from '../customHooks/Usefetchdata'
import { getAllCategories } from '../service/categoryService/CategoryService'
import { categoryActions } from '../store/category-slice'
import style from './Shop.module.css'

const list=[{id:'1',categoryName:"bel"}
,{id:'2',categoryName:"çanta"},{id:'3',categoryName:"tel"}
,{id:'4',categoryName:"ayakkabı"},{id:'5',categoryName:"ayakkabı"}
,{id:'6',categoryName:"ayakkabı"},
]
const Shop = () => {

  const[categories,setCategories]=useState([]);
  //const categories=Usefetchdata("https://localhost:44301/api/category/getall");

  const customer=useContext(CustomerContext);
  console.log("customer in shop: "+JSON.stringify(customer));
  const getCategories=()=>{

    getAllCategories().then((response)=>{
      setCategories(response);
    })
  }

  useEffect(()=>{

      getCategories();
  },[])
  const dispatch=useDispatch();
  dispatch(categoryActions.setCategories(categories))
  console.log("categories: "+categories)

  
  return (
    <Fragment>
        <Navbar/>
        <div className={style.container}>
          <Card categoryList={categories}/>
        </div>
        

    </Fragment>
  )
}

export default Shop;