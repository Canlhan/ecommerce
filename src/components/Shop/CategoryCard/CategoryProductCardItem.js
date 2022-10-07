import React, { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { chartActions } from '../../../store/chart-slice';
import Shoesize from './Shoesize'

const CategoryProductCardItem = (props) => {
    
    const dispatch=useDispatch();
    
    const [onHover,setHover]=useState(false)
    const image=useRef()

    const handlerHover=(e)=>{
        console.log("")
        setHover(true)
    }
    const handlerleave=()=>{
        setHover(false)
    }
    

    const handleAddProduct=()=>{
        console.log("basıldı")
        dispatch(chartActions.setTrueChart())
        dispatch(chartActions.addProduct(props.item))
    }
    
  return (

    <Fragment>
        
            <div key={props.item.productId} className="card"  onMouseEnter={handlerHover} onMouseLeave={handlerleave}>
                <div className="card-information">
                    <div className="discount-tag">-30%</div>
                    
                </div>
                <Link to={props.item.productId}>
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
                     <Shoesize shoesize={props.shozesize}/>
                     
                     
                </div>
                <div className="shoes-information ">
                    <div className="shoes-information-item productName">
                        <h2 className="shoesName ">{props.item.productName}</h2>
                        <div className="shoesPrice">
                            <div className="shoesNewPrice">€{props.item.newPrice}</div> <br/>
                            <div className="shoesDelPrice"><del>€{props.item.price}</del></div>
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