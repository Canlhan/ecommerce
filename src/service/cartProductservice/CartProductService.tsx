
import axios from "axios";
import { CartProductRequest } from "../../components/models/CartProductRequest";



export async function saveChartProducts(chartProduct:CartProductRequest)
{
  console.log("cart productlat kaydediliyor"+JSON.stringify(chartProduct))
    const token=localStorage.getItem("token");
    
    const headers = {
      Authorization: `Bearer ${token}`
     
    }
    
   
    const response=await axios.post(`http://localhost:8089/api/v1/cartproducts/`,chartProduct,{headers});
    console.log("cart productlat kaydedildi")
  
    return response.data;
}