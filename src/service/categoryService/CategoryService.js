import axios from "axios";


// categoryservice meottları ayzılcaktı


export async function getAllCategories(){

    const response=await axios.get("http://localhost:8089/api/v1/categories/");
   
   
   
    console.log("categoriess: "+response);
    return response.data;
}