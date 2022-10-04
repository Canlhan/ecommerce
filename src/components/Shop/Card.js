import React, { Fragment } from 'react'
import style from '../ProductInformation.module.css'
import CardItem from './CardItem'
import { Link } from "react-router-dom";

const Card = (props) => {


  return (
    <Fragment>

    <div className={style.product_information}>
        {props.categoryList.map((item)=>

           <Link to={`/shop/${item.id}`} key={item.id}>

            <CardItem  style={style} item={item}/>

           </Link> 
        )}
       
        
     </div>
    </Fragment>
  )
}

export default Card;