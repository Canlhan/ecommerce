
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
export async function getChartProductsById(chartProductId:any)
{
  let chartProductIdNew;
  if(chartProductId!=undefined){
    chartProductIdNew=chartProductId;
  }
  chartProductId=chartProductId.id;
  console.log("cart productlat kaydediliyor"+JSON.stringify(chartProductId))
    const token=localStorage.getItem("token");
    
    const headers = {
      Authorization: `Bearer ${token}`
     
    }
    
   
    const response=await axios.get(`http://localhost:8089/api/v1/cartproducts/${chartProductId}`,{headers});
    console.log("cart productlat kaydedildi")
  
    return response.data;
}