
import React,{ createContext,useState } from "react";
import { CartProduct } from "../components/models/CartProduct";


import { VendorProduct } from "../components/models/VendorProduct";


interface ChartProductContextType{
  chartProducts: CartProduct[];
  isTrigger: boolean;
  removeFromCart:(item:CartProduct)=>void;
  addToCart:(item:CartProduct)=>void;
  trigger:()=>void;
  cleanTheCartProducts:()=>void;
}

const ChartProductsContext=React.createContext<ChartProductContextType>({

  chartProducts:[],
  isTrigger: false,
  removeFromCart:(item:CartProduct)=>{},
  addToCart:(item:CartProduct)=>{},
  trigger:()=>{},
  cleanTheCartProducts:()=>{}
});





export const ChartProductsContextProvider=(props)=>{

    const[chartProducts,setChartProducts]=useState<CartProduct[]>([]);
    const[isTrigger,setTrigger]=useState(false);

    const addToCart = (item:CartProduct) => {
      console.log("sepete eklenmek için gelen cartProduct:  "+JSON.stringify(item))

       setChartProducts((prev)=>{

         if(prev.includes(item)){
           console.log("giri")
            return prev.filter((cartProduct)=>cartProduct.id!=item.id);
         }
         console.log(item)
         return [...prev,item];
       })
      };
    
      const cleanTheCartProducts=()=>{
        setChartProducts([]);
      }
      const removeFromCart = (item:any) => {
        console.log("silinecek eeman: "+JSON.stringify(item))
        setChartProducts(chartProducts.filter((cartProduct) => cartProduct.id !== item.id));
        console.log("silindikten sonra dizi içi :"+JSON.stringify(chartProducts))
      };
      const trigger=()=>{

        setTrigger((prev)=>!prev)
      }
   

    return <ChartProductsContext.Provider value={{chartProducts,removeFromCart,addToCart,trigger,isTrigger,cleanTheCartProducts}}>

        {props.children}
    </ChartProductsContext.Provider>

};

export default ChartProductsContext;
