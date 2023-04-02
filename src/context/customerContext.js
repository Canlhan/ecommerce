import React,{ createContext,useState } from "react";

const CustomerContext=React.createContext({

    customer:null
});





export const CustomerContextProvider=(props)=>{

    const[customer,setCustomer]=useState();

   
   

    return <CustomerContext.Provider value={{customer,setCustomer}}>

        {props.children}
    </CustomerContext.Provider>

};

export default CustomerContext;


