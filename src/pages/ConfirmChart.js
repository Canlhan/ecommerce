import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ChartCardItem from '../components/Chart/ChartCardItem'
import Navbar from '../components/navbar/Navbar'
import './confirmChart.css'
import style from  '../components/Chart/chart.module.css'

const ConfirmChart = (props) => {
    const products=useSelector((state)=>state.chart.products);
    const totalPrice=useSelector((state)=>state.chart.sumPrice);
  return (
    <Fragment>
       <nav style={{height:'10rem',backgroundColor:'brown',color:'white',textAlign:'center',fontSize:'4.6rem'}}>
       <Navbar/>
        </nav>
    <main>
        <div class={style.product_container}>
            <h2>Sepetim</h2>
            <div class={style.shopping_cart_list}>
                {
                  products.map((product,index)=> <li key={index} class={style.shopping_cart_product}>
                      <ChartCardItem properties={{productId:product.productId,productName:product.productName,price:product.price,quantity:product.quantity}}/> </li>)
                }
               
            </div>
            <h2><span>Önerilen Ürünler</span></h2>
            <div id="recommended" class={style.recommended_products}>Ürün Kartları Buraya Gelecek</div>
            <h2><span>Benzer Ürünler</span></h2>
            <div id="similar" class={style.recommended_products}>Ürün Kartları Buraya Gelecek</div>
        </div>
        <div class={style.order_confirmation}>
            <button>Sepeti Onayla<i class={`${style.fas} ${style.fa_angle_right}`}></i></button>
            <div class={style.order_summary}>
                <h2>Sipariş Özeti</h2>
                <div class={style.total_order_price}>
                    <span>Ürünlerin Toplamı</span>
                    <span>{totalPrice} TL</span>
                </div>
            </div>
        </div>
    </main>
    <footer> Footer Buraya Gelecek</footer>
    </Fragment>
  )
}

export default ConfirmChart