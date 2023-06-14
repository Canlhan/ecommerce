
import axios from "axios";
import jwt_decode from 'jwt-decode';

export async function saveOrder(data){

    const token=localStorage.getItem("token");
    console.log(token)
    console.log("order in service: "+JSON.stringify(data))
    const headers = {
      Authorization: `Bearer ${token}`
     
    }
    if(data.orderProducts==[]){
      return " orderproduct boş api call yapılmadı"
    }
    const response= await axios.post("http://localhost:8089/api/v1/order/",data,{headers});
    
   
    console.log(response.data)
    return response.data;

}