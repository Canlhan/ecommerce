import React, { Fragment } from 'react'
import styles from './CategoryCard.module.css'
import CategoryProductCardItem from './CategoryProductCardItem'


const shozesize=[{value:"36"},{value:"37"},{value:"38"},{value:"39"},{value:"40"},{value:"40"},{value:"40"}]

const CategoryProductCard = (props) => {

    console.log(props.item);
    
  return (
    <Fragment>
     
        
        <CategoryProductCardItem  styles={styles} product={props.item} shozesize={shozesize}/>
    
 
    </Fragment>
  )
}

export default CategoryProductCard