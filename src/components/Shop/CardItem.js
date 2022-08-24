import React, { Fragment } from 'react'

const CardItem = (props) => {


  return (
    <Fragment>
      
       <div  className={props.style.card}>
            <div className={props.style.card_img}
                style={{backgroundImage:`url('https://www.fotografindir.net/wp-content/uploads/2022/04/guzel-kadin-resimleri.jpg')`}}>
            </div>
            <div className={props.style.card_box}>
                <div className={props.style.card_text}>{props.item.categoryName}</div>
            </div>
        </div>
    </Fragment>
  )
}

export default CardItem;