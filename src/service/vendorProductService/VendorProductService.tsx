
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function  saveVendorProduct(data:any,token:any){
  


// CORS yapılandırması
    
  
    const headers = {
        Authorization: `Bearer ${token}`
       
      }

    const response= await axios.post("http://localhost:8089/api/v1/vendorproducts/",data,{headers});

  
    return response;

}

