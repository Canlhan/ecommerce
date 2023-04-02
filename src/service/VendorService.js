
import axios from "axios";
import jwt_decode from 'jwt-decode';


export async function createVendor(data){

    
    const response= await axios.post("http://localhost:8089/api/v1/vendor/register",data);
    
   
    console.log(response.data)
    return response.data;

}

export async function loginVendor(data){

    const response= await axios.post("http://localhost:8089/api/v1/auth/vendor/authenticate",data);
    
    console.log("resss: "+response.data.token)
    const token = response.data.token;
   
    
    return response.data.token;
}
export function getAuthority(token){
    const decodedToken = jwt_decode(token); 
    console.log(decodedToken.role[0].authority);
    return decodedToken.role[0].authority;
}
