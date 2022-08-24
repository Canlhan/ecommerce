import React, { Fragment } from 'react'
import style from '../ProductInformation.module.css'
import CardItem from './CardItem'

const Card = (props) => {

  return (
    <Fragment>

    <div className={style.product_information}>
        {props.categoryList.map((item)=>

            <CardItem  style={style} item={item}/>
        )}
        
     </div>
    </Fragment>
  )
}

export default Card;