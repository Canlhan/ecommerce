import React, { Fragment } from 'react'
import style from '../homepageother/ProductInformation.module.css'
import CardItem from './CardItem'
import { Link } from "react-router-dom";

const Card = (props) => {

  console.log("card içinde kat"+props.categoryList);

  return (
    <Fragment>

    <div className={style.product_information}>
     
        {props.categoryList.map((item)=>

           <Link to={`/shop/${item.id}`} key={item.categoryID}>

            <CardItem  style={style} item={item}/>

           </Link> 
        )}
       
        
     </div>
    </Fragment>
  )
}

export default Card;