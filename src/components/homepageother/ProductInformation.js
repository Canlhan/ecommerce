import React, { Fragment } from 'react'

import style from './ProductInformation.module.css'
const ProductInformation = () => {

    
  return (
    <Fragment>
         <div className={style.product_information}>
        <div className={style.card}>
            <div className={style.card_img}
                style={{backgroundImage:`url('https://www.fotografindir.net/wp-content/uploads/2022/04/guzel-kadin-resimleri.jpg')`}}>
            </div>
            <div className={style.card_box}>
                <div className={style.card_text}>New Arrivals</div>
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_img}
                style={{backgroundImage: `url('https://i0.wp.com/antalyatv.com/wp-content/uploads/2022/03/Guzel-Kadin-Resmi-En-Guzel-Bayanlar-1.jpg?fit=879%2C853&ssl=1')`}}>
            </div>
            <div className={style.card_box}>
                <div className={style.card_text}>Pre-Order</div>
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_img}
                style={{backgroundImage: `url('https://p0.piqsels.com/preview/19/1006/481/beautiful-woman-black-t-shirt-blonde-grass-wall.jpg')`}}>
            </div>
            <div className={style.card_box}>
                <div className={style.card_text}>Sale</div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default ProductInformation