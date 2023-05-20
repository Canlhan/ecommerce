
import React,{ createContext,useState } from "react";
import { CartProduct } from "../components/models/CartProduct";


import { VendorProduct } from "../components/models/VendorProduct";


interface ChartProductContextType{
  chartProducts: CartProduct[];
  isTrigger: boolean;
  removeFromCart:(item:CartProduct)=>void;
  addToCart:(item:CartProduct)=>void;
  trigger:()=>void;
}

const ChartProductsContext=React.createContext<ChartProductContextType>({

  chartProducts:[],
  isTrigger: false,
  removeFromCart:(item:CartProduct)=>{},
  addToCart:(item:CartProduct)=>{},
  trigger:()=>{},
});





export const ChartProductsContextProvider=(props)=>{

    const[chartProducts,setChartProducts]=useState<CartProduct[]>([]);
    const[isTrigger,setTrigger]=useState(false);

    const addToCart = (item:CartProduct) => {
      console.log("sepete eklendi ")
       setChartProducts((prev)=>{
         if(prev.includes(item)){
           console.log("giri")
            return prev.filter((cartProduct)=>cartProduct.id==item.id);
         }
         console.log([...prev,item])
         return [...prev,item];
       })
      };
    
      const removeFromCart = (item:CartProduct) => {
        setChartProducts(chartProducts.filter((cartProduct) => cartProduct.id !== item.id));
      };
      const trigger=()=>{

        setTrigger((prev)=>!prev)
      }
   

    return <ChartProductsContext.Provider value={{chartProducts,removeFromCart,addToCart,trigger,isTrigger}}>

        {props.children}
    </ChartProductsContext.Provider>

};

export default ChartProductsContext;
