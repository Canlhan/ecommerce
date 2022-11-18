import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Usepostdata from '../../../customHooks/Usepostdata';
import { chartActions } from '../../../store/chart-slice';
import Shoesize from './Shoesize'

const CategoryProductCardItem = (props) => {
    
    const dispatch=useDispatch();
    const [addProduct,setAddProduct]=useState(false);
    const[data,setData]=useState({url:"",object:{firstname:"",lastname:"",
email:"",password:"",contact:""}});
    
   
    const [onHover,setHover]=useState(false)
    const image=useRef()

    useEffect(()=>{
        setData({url:"",object:{}})
    },[])
    const message=Usepostdata(data);
    console.log("Category  product cart item içindeki product: "+JSON.stringify(props.product))
    const handlerHover=(e)=>{
        
        
    }
    const handlerleave=()=>{
        setHover(false)
    }

   

    const handleAddProduct=()=>{
        console.log("basıldı")
        setData(props.product);

        dispatch(chartActions.setTrueChart())
        dispatch(chartActions.addProduct({...props.product}))
    }
    console.log(props.product.ProductName+ " fdgdf")
  return (

    <Fragment>
        
            <div key={props.product.productID} className="card"  onMouseEnter={handlerHover} onMouseLeave={handlerleave}>
                <div className="card-information">
                    <div className="discount-tag">-30%</div>
                    
                </div>
                <Link to={props.product.productID}>
                <div ref={image}   className="shoes-image" style={{backgroundImage:
                    onHover===true?'url(https://picsum.photos/200/300)':'url(https://picsum.photos/300/300)'
                }}
                    data-first="https://picsum.photos/200/300"
                    data-second="https://picsum.photos/200/300">
                </div>
                </Link>
                
                <div className="shoes-image-list">
                    <div className="shoes-image-list-item"></div>
                    <div className="shoes-image-list-item"></div>
                    <div className="shoes-image-list-item"></div>
                </div>
                
                <div className="shoe-sizes">
                     <Shoesize shoesize={[2,3,4]}/>
                     
                     
                </div>
                <div className="shoes-information ">
                    <div className="shoes-information-item productName">
                        <h2 className="shoesName ">{props.product.productName}</h2>
                        <div className="shoesPrice">
                            <div className="shoesNewPrice">€{props.product.price}</div> <br/>
                            <div className="shoesDelPrice"><del>€{props.product.price}</del></div>
                        </div>
                    </div>
                    <div  onClick={handleAddProduct} className="shoes-information-item"><a className="shopping-button" href="#">
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