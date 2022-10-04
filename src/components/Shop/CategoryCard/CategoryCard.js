import React, { Fragment } from 'react'
import './CategoryCard.css'
import CategoryCardItem from './CategoryCardItem'
import Shoesize from './Shoesize'
const shozesize=[{value:"36"},{value:"37"},{value:"38"},{value:"39"},{value:"40"},{value:"40"},{value:"40"}]

const CategoryCard = (props) => {

    
    
  return (
    <Fragment>
     
        
        <CategoryCardItem item={props.item} shozesize={shozesize}/>
    
 
    </Fragment>
  )
}

export default CategoryCard