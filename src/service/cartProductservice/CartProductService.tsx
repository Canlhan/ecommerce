
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
  console.log("id cartprocut: "+JSON.stringify(chartProductId))
  if(typeof chartProductId=='object'){
    console.log("id cartprocut id : "+JSON.stringify(chartProductId.id))
    chartProductIdNew=chartProductId.id;
  }else{
    chartProductIdNew=chartProductId
  }
  
  //console.log("dfgdfgdfg"+JSON.stringify(chartProductId))
    const token=localStorage.getItem("token");
    
    const headers = {
      Authorization: `Bearer ${token}`
     
    }
    
   console.log("yeni id son defa: "+chartProductIdNew)
    const response=await axios.get(`http://localhost:8089/api/v1/cartproducts/${chartProductIdNew}`,{headers});
    console.log("cart productlat kaydedildi")
  
    return response.data;
}