
import React,{ createContext,useState } from "react";


import { VendorProduct } from "../components/models/VendorProduct";


interface ChartProductContextType{
  chartProducts: VendorProduct[];
  isTrigger: boolean;
  removeFromCart:(item:VendorProduct)=>void;
  addToCart:(item:VendorProduct)=>void;
  trigger:()=>void;
}

const ChartProductsContext=React.createContext<ChartProductContextType>({

  chartProducts: [],
  isTrigger: false,
  removeFromCart:(item:VendorProduct)=>{},
  addToCart:(item:VendorProduct)=>{},
  trigger:()=>{},
});





export const ChartProductsContextProvider=(props)=>{

    const[chartProducts,setChartProducts]=useState<VendorProduct[]>([]);
    const[isTrigger,setTrigger]=useState(false);

    const addToCart = (item:VendorProduct) => {
      console.log("sepete eklendi ")
       setChartProducts((prev)=>{
         if(prev.includes(item)){
           console.log("giri")
            return prev.filter((product)=>product.product.productName==item.product.productName);
         }
         
         return [...prev,item];
       })
      };
    
      const removeFromCart = (item:VendorProduct) => {
        setChartProducts(chartProducts.filter((i) => i.product.productName !== item.product.productName));
      };
      const trigger=()=>{

        setTrigger((prev)=>!prev)
      }
   

    return <ChartProductsContext.Provider value={{chartProducts,removeFromCart,addToCart,trigger,isTrigger}}>

        {props.children}
    </ChartProductsContext.Provider>

};

export default ChartProductsContext;
