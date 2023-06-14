
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function  saveVendorProduct(data:any,token:any){
  
  console.log(JSON.stringify(data))
    const headers = {
        Authorization: `Bearer ${token}`
       
      }

    const response= await axios.post("http://localhost:8089/api/v1/vendorproducts/",data,{headers});

  
    return response;

}
export async function  getVendorProductById(data:any){
  const token=localStorage.getItem("token");
  const headers = {
      Authorization: `Bearer ${token}`
     
    }

  const response= await axios.get(`http://localhost:8089/api/v1/vendorproducts/product/${data}`,{headers});


  return response;

}

export async function getVendorProductsByVendorId(vendorId:number){

const token=localStorage.getItem("token");
  console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`
   
  }

  const response= await axios.get(`http://localhost:8089/api/v1/vendorproducts/${vendorId}`,{headers});

  console.log("vendorProducts by vendorId: "+JSON.stringify(response))

  return response.data;


}

export async function getVendorProductsByCategoryId(categoryId:number) {
  

  const token=localStorage.getItem("token");
  console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`
   
  }

  const response= await axios.get(`http://localhost:8089/api/v1/vendorproducts/category/${categoryId}`,{headers});

  console.log("vendorProducts by vendorId: "+JSON.stringify(response))

  return response.data;

}

