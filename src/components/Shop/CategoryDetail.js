import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import CategoryCard from './CategoryCard/CategoryCard';
import './Categorydetail.css'


const shoes=[{productId:"1",productName:"AYAKKABI",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1"}
,{productId:"2",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2"},{productId:"8",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:300,category:"3"}
,{productId:"3",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:400,category:"4"},{productId:"9",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1"}
,{productId:"4",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2"}
,{productId:"5",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:300,category:"3"}
,{productId:"6",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:400,category:"4"},{productId:"10",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:100,category:"1"}
,{productId:"7",productName:"ayakkabı",imageUrl:"https://picsum.photos/200/300",newPrice:100,price:200,category:"2"}]

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
                    filtershoes.map((item)=>(<div className='grid_item'>  <CategoryCard item={item}/></div>))
                }
                
        </div>
       
      
    
   </Fragment>
  )
}

export default CategoryDetail