
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function getVendorByEmailWithoutProducts(){

    
    const vendor=getVendorByEmail().then((response)=>{
      const{vendorProducts,...backVendor}=response
      return backVendor;
    })
    // buradan devam 
    
    
    console.log("backvendorrr"+JSON.stringify(vendor));
    return vendor;

}

export async  function getVendorByEmail(){

  const token:any=localStorage.getItem("token");
  const decodedToken:any=jwt_decode(token)
  const email=decodedToken.sub;
  const headers = {
      Authorization: `Bearer ${token}`
    }
  const response=await axios.get(`http://localhost:8089/api/v1/vendors/${email}`,{headers})
  // buradan devam 
  
  return response.data;
}

