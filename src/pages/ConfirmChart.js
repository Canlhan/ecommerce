import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ChartCardItem from '../components/Chart/ChartCardItem'
import Navbar from '../components/navbar/Navbar'
import './confirmChart.css'
import '../components/Chart/chart.css'

const ConfirmChart = (props) => {
    const products=useSelector((state)=>state.chart.products);
    const totalPrice=useSelector((state)=>state.chart.sumPrice);
  return (
    <Fragment>
       <nav style={{height:'10rem',backgroundColor:'brown',color:'white',textAlign:'center',fontSize:'4.6rem'}}>
       <Navbar/>
        </nav>
    <main>
        <div class="product-container">
            <h2>Sepetim</h2>
            <div class="shopping-cart-list">
                {
                  products.map((product,index)=> <li key={index} class="shopping-cart-product"><ChartCardItem properties={{productId:product.productId,productName:product.productName,price:product.price,quantity:product.quantity}}/> </li>)
                }
               
            </div>
            <h2><span>Önerilen Ürünler</span></h2>
            <div id="recommended" class="recommended-products">Ürün Kartları Buraya Gelecek</div>
            <h2><span>Benzer Ürünler</span></h2>
            <div id="similar" class="recommended-products">Ürün Kartları Buraya Gelecek</div>
        </div>
        <div class="order-confirmation">
            <button>Sepeti Onayla<i class="fas fa-angle-right"></i></button>
            <div class="order-summary">
                <h2>Sipariş Özeti</h2>
                <div class="total-order-price">
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