import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChartCardItem from '../components/Chart/ChartCardItem'
import Navbar from '../components/navbar/Navbar'
import '../components/Chart/chart.module.css'
import style from  './confirmChart.module.css'
import Footer from '../components/homepageother/Footer'
import { getCustomerByEmail } from '../service/customerService/CustomerService'
import { VendorProduct } from '../components/models/VendorProduct'
import { OrderProductRequest } from '../components/models/OrderProductRequest'
import { Order } from '../components/models/Order'
import { saveOrder } from '../service/order/OrderService'
import CustomerContext from '../context/customerContext'
import ChartProductsContext from '../context/ChartProductContext'
import { getVendorProductById } from '../service/vendorProductService/VendorProductService'
import { createCart } from '../service/cartService/chartService'
import { CartProductRequest } from '../components/models/CartProductRequest'
import { saveChartProducts } from '../service/cartProductservice/CartProductService'
import { CartProduct } from '../components/models/CartProduct'


const ConfirmChart = (props) => {
    
    const cart=localStorage.getItem("cartId");
    let cartId:number;
    if(cart!==null){
        cartId=parseInt(cart);
    }

    const[saveChart,setSaveChart]=useState(false);

    const products:VendorProduct[]=useSelector((state:any)=>state.chart.products);
    const totalPrice=useSelector((state:any)=>state.chart.sumPrice);
    const[isOrderComp,setOrderComp]=useState(false);
    //const {chartProducts,cleanTheCartProducts}=useContext(ChartProductsContext);
    const email=localStorage.getItem("customerEmail");
    const[totalPriceConfirm,setTotalPrice]=useState(totalPrice);

    const[isCustomerGet,setCustomerGet]=useState(false);
    const{addToCart}=useContext(ChartProductsContext);

    const[vendorProduct,setVendorProduct]=useState<VendorProduct>();
    const[order,setOrder]=useState<Order>();
    const {customer}=useContext(CustomerContext);
   
    
    const[cust,setCust]=useState({});
   // const customerId=localStorage.getItem("customerId");

    const[orderProducts,setOrderProducts]=useState<any[]>([]);
    const[vendorIds,setVendorIds]=useState<number[]>([]);
    const[isPressConfirm,setConfirm]=useState<boolean>(false);

    const[addedOrder,setAddedOrder]=useState({customerId:16});

    const[chartProducts,setChartProduct]=useState<CartProduct[]>([]);
    //console.log(chartProducts)
    const createOrders=()=>{
        console.log("sepete onaylaya basıldı")       
        //console.log("charrpoduc: "+JSON.stringify(chartProducts))

        createCart(customer).then((response)=>{
      
      
            
                saveAllChartProducts(response.id);
           }).catch((er)=>{
             console.log("sepet yaratılırken hata oluştu...."+er)

           })
       
        // order kaydı yapılmalı içindeki productlar orderproduct nesnesine dönüştürülmeli 
        // ve bir liste halinde order'a eklenmeli     
    }

    useEffect(()=>{
        if(isOrderComp){
            chartproductMap();
        }
        
    },[isOrderComp])

     const  saveAllChartProducts= (cartId)=>{
        console.log("product dizisinin içi : "+JSON.stringify(products))
       
        products.map((product)=>{
          console.log("map içinde")

          let cartProduct:CartProductRequest={cartId:cartId,quantity:1,vendorProductsIds:[]};
          cartProduct.quantity=1;
          const {id,vndproduct}=product;
        
          cartProduct.vendorProductsIds.push(id);
    
          //console.log("cartproduct oluşturuldu : "+JSON.stringify(cartProduct))
          console.log(isCustomerGet)
         
            saveChartProducts(cartProduct).then((response)=>{
        
              
              //console.log("response carprdocut kaydedilmesingen delen : "+JSON.stringify(response))
              response.map((cartResponseData)=>{
                //console.log("response charprodcut olarak kaydedilcek: "+JSON.stringify(cartResponseData))
                console.log("chartProduct dizisine ekleniiyor"+JSON.stringify(cartResponseData))
                setChartProduct([...chartProducts,cartResponseData]);
              })
              setOrderComp(true);
              //console.log(JSON.stringify(response));
              
            }).catch((er)=>{
                console.log("chart product kaydedilirken hata oluştu")
              }).finally(()=>{

                setSaveChart(true);

              })
          
         
          
        })  
      
       }

       useEffect(()=>{
           if(saveChart){
               
               chartproductMap();
           }
       },[saveChart])

    const chartproductMap=()=>{
        

        
        console.log("girdi fonksiyona "+chartProducts.length)
        chartProducts.map(chartProduct=>{
           
            const orderProduct:OrderProductRequest=
            {
                quantity:chartProduct.quantity,
                cartProductId:chartProduct.id
            };
            
            setOrderProducts((prev)=>{
                
                
               return [...prev, orderProduct]});
           

            if(typeof chartProduct.vendorProduct=='number'){

                console.log("vendorprouct id ise girdi buraya ")
               getVendorProductById(chartProduct.vendorProduct)
                .then((response)=>{
                    console.log("vendorun VENDORPRODUCT GETİRİLİYOR: "+JSON.stringify(response))
                    
                    setVendorProduct(response.data)
                }).catch((er)=>er);

            }else{
                console.log("vendorun idisiiiiii: "+JSON.stringify(chartProduct.vendorProduct.vendor.id))
                
                setVendorProduct(chartProduct.vendorProduct)
            }
          
                
            console.log("orderProductsa eklenen orderProduct: "+JSON.stringify(orderProduct))
            
            /*
            console.log("product in CONFİRM CART: "+JSON.stringify(chartProduct));
            console.log("orderProduct in CONFİRM CART: "+JSON.stringify(orderProduct));
           
            */
        })
    
        
        
    }

    useEffect(()=>{

        if(vendorProduct!=undefined){

            setVendorIds((prev)=>[...prev,vendorProduct.vendor.id]
            
            );
            
            setConfirm(true);
        }
        
    },[vendorProduct])

    console.log("bekledğin yer: "+isPressConfirm)
    useEffect(()=>{
        console.log("UUUUUUUUUUUUUUUUUSSEEEEE EFFECT ÇALIŞTIIIIIIIIIIIIIII")
        console.log(isPressConfirm)
        if(isPressConfirm ){
            if(customer!=null){
                console.log("girdi")
                console.log("order eklenmeden önceki son kontrol orderProducts için : "+JSON.stringify(orderProducts))
                const order:Order={
                    customerId:customer.id,
                    orderProducts:orderProducts,
                    vendorIds:vendorIds
    
                }
                setOrder(order);
                
                console.log("order: "+JSON.stringify(order));
                console.log("orderproduct: "+JSON.stringify(orderProducts))
                console.log("vendorIds: "+JSON.stringify(vendorIds))     
              
            }
           
        }

    },[isPressConfirm])
    useEffect(()=>{

        if(order!=undefined){
            saveOrder(order).then((response)=>{

                //console.log("order kaydedildi: "+JSON.stringify(response))
                
            })
        }
        
    },[order])

    useEffect(()=>{
        getCustomerByEmail(email).then((response)=>{
          console.log("char email customer: "+JSON.stringify(response));
          setCust(response);
        });
      },[])

    useEffect(()=>{

        const totalPrice = products.reduce((sum, product) => sum + product.price*product.quantity, 0);
        setTotalPrice(totalPrice);

    },[products])

    /*
    const postOrder = async()=>{

        console.log(addedOrder);
        console.log("post order")
        const url=BASE_URL+"Orders/addorder";
        console.log(url)
       const result= await fetch(url,{
           method:"POST",
           headers:{
               'Content-type':'application/json'
           },
           body:JSON.stringify(addedOrder)
       })
       const json=await result.json();
       setFinishOrder(true);
       setOrders(json.data)
       console.log(JSON.stringify(json));
      
    }

    useEffect(()=>{

        if(isCreate){
            console.log("post order useeffect")
            postOrder();
        }
    },[isCreate])


    const postOrderItems=async (product)=>{

        const url=BASE_URL+"OrderedProduct/add";
        console.log({vendorProductID:product.vendorProductID,orderID:Orders.orderID,quantity:product.quantity,state:0})
        console.log(url)
       const result= await fetch(url,{
           method:"POST",
           headers:{
               'Content-type':'application/json'
           },
           body:JSON.stringify({VendorProductID:product.vendorProductID,OrderID:Orders.orderID,Quantity:product.quantity,State:0})
       })
       
    }
    useEffect(()=>{

        if(isfinishOrder){

            products.forEach(element => {
                console.log(element.productId);
                postOrderItems(element);
            });
            
        }
    },[isfinishOrder])

    */

  return (
    <Fragment>
       <nav style={{height:'10rem',backgroundColor:'brown',color:'white',textAlign:'center',fontSize:'4.6rem'}}>
       <Navbar/>
        </nav>
    <main>
        <div className={style.product_container}>
            <h2>Sepetim</h2>
            <div className={style.shopping_cart_list}>
                {
                  products.map((product,index)=> {
                      //console.log("confirm char içiindeki chartcartıteme gönderilen obje: "+JSON.stringify(product))
                    
                   return <li key={index} className={style.shopping_cart_product}>
                      <ChartCardItem  chartProduct={product}/> </li>})
                }
               
            </div>
            
        </div>
        <div className={style.order_confirmation}>
            <button onClick={createOrders}>Sepeti Onayla<i className={`${style.fas} ${style.fa_angle_right}`}></i></button>
            <div className={style.order_summary}>
                <h2>Sipariş Özeti</h2>
                <div className={style.total_order_price}>
                    <span>Ürünlerin Toplamı</span>
                    <span>{totalPriceConfirm} TL</span>
                </div>
            </div>
        </div>
    </main>
   <Footer/>
    </Fragment>
  )
}

export default ConfirmChart