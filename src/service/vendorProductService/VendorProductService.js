
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function  saveVendorProduct(data){
    const token=localStorage.getItem("token");
    console.log("token: "+token);
    const headers = {
        Authorization: `Bearer ${token}`
      }

    const response= await axios.post("http://localhost:8089/api/v1/vendorproducts/",data,{headers});

    console.log("vendorprorudct: "+JSON.stringify(response.data));
    return response;

}

