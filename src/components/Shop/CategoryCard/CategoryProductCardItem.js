import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartProductsContext from '../../../context/ChartProductContext';
import Usepostdata from '../../../customHooks/Usepostdata';
import { addChartProduct } from '../../../service/cartService/chartService';
import { chartActions } from '../../../store/chart-slice';
import Shoesize from './Shoesize'

const CategoryProductCardItem = ({styles,product}) => {
    
  
    const{addToCart,trigger}=useContext(ChartProductsContext);

   
    
   
   
    const [onHover,setHover]=useState(false)
    const image=useRef()

   
    
   
    const handlerHover=(e)=>{
        
        
    }
    const handlerleave=()=>{
        setHover(false)
    }

   

    const handleAddProduct=()=>{
        console.log("basıldı")
        
        console.log("seepte eklenecek productS: "+JSON.stringify(product))
        
        addChartProduct(product)

     
    }
    
  return (

    <Fragment>
        
            <div key={product.id} className={styles.card}  onMouseEnter={handlerHover} onMouseLeave={handlerleave}>
                <div className={styles.card_information}>
                    <div className={styles.discount_tag}>_30%</div>
                    
                </div>
                
                <div ref={image}   className={styles.shoes_image} style={{backgroundImage:
                    onHover===true?'url(https://picsum.photos/200/300)':'url(https://picsum.photos/300/300)'
                }}
                    data-first="https://picsum.photos/200/300"
                    data-second="https://picsum.photos/200/300">
                </div>
               
                
                <div className={styles.shoes_image_list}>
                    <div ></div>
                    <div></div>
                    <div ></div>
                </div>
                
                <div className={styles.shoe_sizes}>
                     <Shoesize shoesize={[2,3,4]}/>
                     
                     
                </div>
                <div className={styles.shoes_information}>
                    <div className={`${styles.shoes_information_item} ${styles.productName}`}>
                        <h2 className={styles.shoesName}>{product.product.productName}</h2>

                        <div className={styles.shoesPrice}>
                            <div className={styles.shoesNewPrice}>€{product.price}</div> <br/>
                            <div className={styles.shoesDelPrice}><del>€{product.price}</del></div>
                        </div>
                    </div>
                    <div  onClick={handleAddProduct} className={styles.shoes_information_item}>
                        <a className={styles.shopping_button} href="#">
                            <i className="fas fa-shopping-bag"></i>
                    </a></div>
                </div>
            </div>
      
   
    <div className="toggleButtons">
    </div>
    </Fragment>
  )
}

export default CategoryProductCardItem;