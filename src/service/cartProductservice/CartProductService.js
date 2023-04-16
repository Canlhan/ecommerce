
import axios from "axios";



export async function saveChartProducts(chartProduct)
{

    const token=localStorage.getItem("token");
    
    const headers = {
      Authorization: `Bearer ${token}`
     
    }
  
   
    const cart={cartProducts:chartProduct};
    const response=await axios.post(`http://localhost:8089/api/v1/carts/add?customerId=${customer.id}`,cart,{headers});
  
    return response.data;
}