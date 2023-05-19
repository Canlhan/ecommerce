import React,{ createContext,useState } from "react";

const CustomerContext=React.createContext({

    customer:{id:0}
});





export const CustomerContextProvider=(props)=>{

    const[customer,setCustomer]=useState();

    console.log("customer changed: "+JSON.stringify(customer));
   

    return <CustomerContext.Provider value={{customer,setCustomer}}>

        {props.children}
    </CustomerContext.Provider>

};

export default CustomerContext;


