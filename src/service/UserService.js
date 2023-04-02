
import axios from "axios";


export async function createCustomer(data){

    
    const response= await axios.post("http://localhost:8089/api/v1/customers/register",data);
    
   
    console.log(response.data)
    return response.data;

}

export async function loginCustomer(data){

    const response= await axios.post("http://localhost:8089/api/v1/auth/authenticate",data);
    console.log("resss: "+response)
    return response.data;
}