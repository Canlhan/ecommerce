import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/Shop/Card'
import Usefetchdata from '../customHooks/Usefetchdata'
import { categoryActions } from '../store/category-slice'
import style from './Shop.module.css'

const list=[{id:'1',categoryName:"bel"}
,{id:'2',categoryName:"çanta"},{id:'3',categoryName:"tel"}
,{id:'4',categoryName:"ayakkabı"},{id:'5',categoryName:"ayakkabı"}
,{id:'6',categoryName:"ayakkabı"},
]
const Shop = () => {

  const categories=Usefetchdata("https://localhost:44301/api/category/getall");
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