
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function  saveVendorProduct(data:any,token:any){
  
    const headers = {
        Authorization: `Bearer ${token}`
       
      }

    const response= await axios.post("http://localhost:8089/api/v1/vendorproducts/",data,{headers});

  
    return response;

}

export async function getVendorProductsByVendorId(vendorId:number){

const token=localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`
   
  }

  const response= await axios.get("http://localhost:8089/api/v1/vendorproducts/",{headers});

  console.log("vendorProducts by vendorId: "+JSON.stringify(response))

  return response.data;


}

