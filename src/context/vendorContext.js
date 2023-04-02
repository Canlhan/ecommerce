
import React,{ createContext,useState } from "react";


const VendorContext=React.createContext({

    vendor:null
});





export const VendorContextProvider=(props)=>{

    const[vendor,setVendor]=useState();

   
   

    return <VendorContext.Provider value={{vendor,setVendor}}>

        {props.children}
    </VendorContext.Provider>

};

export default VendorContext;