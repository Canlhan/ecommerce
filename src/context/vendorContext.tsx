
import React, { createContext, useState } from "react";
import { Vendor } from "../components/models/Vendor";

interface VendorContextState {
  vendor: Vendor;
  setVendor: React.Dispatch<React.SetStateAction<Vendor>>;
}

const defaultVendorContextState: VendorContextState = {
  vendor: {
    id: 0,
    name: "",
    adress:"",
    contact:"",
    email:""  
  },
  setVendor:()=>{}
};

const VendorContext = createContext(defaultVendorContextState);

export const VendorContextProvider = (props) => {
  const [vendor, setVendor] = useState(defaultVendorContextState.vendor);

  console.log("vendor değişti: "+JSON.stringify(vendor));
  return (
    <VendorContext.Provider value={{ vendor, setVendor }}>
      {props.children}
    </VendorContext.Provider>
  );
};

export default VendorContext;