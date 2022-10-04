import React, { Fragment } from 'react'
import brk from '../../assets/g.jpg'
import brk2 from '../../assets/f.jpg'
const CardItem = (props) => {


  return (
    <Fragment>
      
       <div  className={props.style.card}>
            <div className={props.style.card_img}
                style={{backgroundImage:`url(${brk2})`}}>
                  
            </div>

            <div className={props.style.card_box}>
                <div className={props.style.card_text}>{props.item.categoryName}</div>
            </div>
        </div>
    </Fragment>
  )
}

export default CardItem;