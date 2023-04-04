
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function getVendorByEmail(email){

    const token=localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
      }
    const response=await axios.get(`http://localhost:8089/api/v1/vendors/${email}`,{headers})
    // buradan devam 
    console.log("vendor: "+JSON.stringify(response.data))
    const{vendorProducts,...backVendor}=response.data;
    return backVendor;

}

