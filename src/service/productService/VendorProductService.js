import axios from "axios";


export async function saveVendorProduct(data){

    const response=await axios.post("http://localhost:8089/api/v1/vendorproducts/",data);

    return response.data;
    
}




