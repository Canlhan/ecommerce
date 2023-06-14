import axios from "axios";



export async function getChartItems(customerId){

    const response=await axios.get(`http://localhost:8089/api/v1/carts/${customerId}`);
   
   
   
    console.log("carts: "+response);

    return response.data;
}

export async function addChartProduct(cartProduct,cartId){

    const response=await axios.post(`http://localhost:8089/api/v1/carts/${cartId}`,cartProduct);
   
   
   
    console.log("carts: "+response);

    return response.data;
}

export async function createCart(customer)
{
    const token=localStorage.getItem("token");
 
  const headers = {
    Authorization: `Bearer ${token}`
   
  }

 
    const cart={cartProducts:[]};
    const response=await axios.post(`http://localhost:8089/api/v1/carts/add?customerId=${customer.id}`,cart,{headers});

   

    return response.data;

}