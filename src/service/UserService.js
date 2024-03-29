
import axios from "axios";
import jwt_decode from 'jwt-decode';

export async function createCustomer(data){

    
    const response= await axios.post("http://localhost:8089/api/v1/customers/register",data);
    
   
    console.log(response.data)
    return response.data;

}

export async function createVendor(data){

    const response= await axios.post("http://localhost:8089/api/v1/vendors/register",data);
    
   
    console.log(response.data)
    return response.data;

}

export async function loginUser(data){

    const response= await axios.post("http://localhost:8089/api/v1/auth/authenticate",data);
    
    console.log("resss: "+response.data.token)
    const token = response.data.token;
   
    
    return response.data.token;
}
export function getAuthority(token){
    const decodedToken = jwt_decode(token); 
    console.log(decodedToken.role[0].authority);
    return decodedToken.role[0].authority;
}