import React,{ createContext,useState } from "react";

const CustomerContext=React.createContext({

    customer:{},
    addCustomer:(customer)=>{}
});





export const CustomerContextProvider=(props)=>{

    const[customer,setCustomer]=useState();


    const AddCustomer=(customer)=>{

        setCustomer(customer);
    }
   

    

    




    return <CustomerContext.Provider value={[customer,setCustomer]}>

        {props.children}
    </CustomerContext.Provider>

};

export default CustomerContext;


