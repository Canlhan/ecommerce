import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartProductsContext from '../../../context/ChartProductContext';

import Usepostdata from '../../../customHooks/Usepostdata';
import { addChartProduct } from '../../../service/cartService/chartService';
import { chartActions } from '../../../store/chart-slice';
import Shoesize from './Shoesize'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const CategoryProductCardItem = ({styles,product}) => {
    
  
   
    const dispatch=useDispatch();
    const isOpenChart=useSelector(state=>state.chart.isOpenChart);
    const[imageUrl,setImageUrl]=useState();
   
   
    const [onHover,setHover]=useState(false)
    const image=useRef()

   
   
   
    const firebaseConfig = {
        apiKey: "AIzaSyCiV2KNRqf9D7EYwO4cxZNKaS1IJo-sdFo",
        authDomain: "ecommerce-feef4.firebaseapp.com",
        projectId: "ecommerce-feef4",
        storageBucket: "ecommerce-feef4.appspot.com",
        messagingSenderId: "893245861405",
        appId: "1:893245861405:web:d126ed614bd21210e720f4",
        measurementId: "G-EFHSBECN7J"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      // Firebase'i başlatın
    
      const storage=getStorage(app)

      const fileRef = ref(storage, `images/${product.product.productName}`);

      console.log("produt name ofr fetching image: "+product.product.productName)
    const handlerHover=(e)=>{
        
        
    }
    const handlerleave=()=>{
        setHover(false)
    }

    getDownloadURL(fileRef)
        .then((url) => {
        // Dosyanın indirme URL'si kullanılabilir
        console.log(url);
        setImageUrl(url)
        })
        .catch((error) => {
        // Hata durumunda hata mesajını işleyin
        console.log(error);
        });

    const handleAddProduct=()=>{
        console.log("basıldı")
        
        console.log("seepte eklenecek productS: "+JSON.stringify(product))
        dispatch(chartActions.addProduct(product));
        

     
    }
    
  return (

    <Fragment>
        
            <div key={product.id} className={styles.card}  onMouseEnter={handlerHover} onMouseLeave={handlerleave}>
                <div className={styles.card_information}>
                    <div className={styles.discount_tag}>_30%</div>
                    
                </div>
                
                <div ref={image}   className={styles.shoes_image} style={{backgroundImage:
                    onHover===true?`url(https://picsum.photos/200/300)`:`url(${imageUrl})`
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