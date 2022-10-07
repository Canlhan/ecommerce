import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { chartActions } from '../../../store/chart-slice';
import Navbar from '../../navbar/Navbar';
import CategoryCard from './CategoryCard';
import './Categorydetail.css'


const shoes=[{productId:"1",productName:"AYAKKABI",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1",quantity:1}
,{productId:"2",productName:"çanta",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2",quantity:1},{productId:"8",productName:"pantolon",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:300,category:"3",quantity:1}
,{productId:"3",productName:"bileklik",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:400,category:"4",quantity:1},{productId:"9",productName:"kazak",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1",quantity:1}
,{productId:"4",productName:"kılıf",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2",quantity:1}
,{productId:"5",productName:"tarak",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:300,category:"3",quantity:1}
,{productId:"6",productName:"gözlük",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:400,category:"4",quantity:1},{productId:"10",productName:"nike",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1",quantity:1}
,{productId:"7",productName:"klavye",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2",quantity:1}]

const CategoryDetail = () => {

  

    const [filtershoes,setfilter]=useState([])
    
   
   
    const params=useParams()
    
    
    

    useEffect(()=>{
      console.log("çalıştı use");
     setfilter(shoes.filter((product)=>(product.category===params.categoryId))) 
      
    },[])
    
    
   
   
 

  return (
   <Fragment>
     
    
     <Navbar/>
        <div className='container'>
          
                {
                    filtershoes.map((item,index)=>(<div key={index} className='grid_item'>  <CategoryCard  item={item}/></div>))
                }
                
        </div>
       
      
    
   </Fragment>
  )
}

export default CategoryDetail