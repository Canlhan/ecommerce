
import axios from "axios";

export async function getCustomerByEmail(email){

    const token=localStorage.getItem("token");
    //console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`
     
    }

    
    const response= await axios.get(`http://localhost:8089/api/v1/customers/getemail?email=${email}`,{headers});
        
       
        //console.log("customer by email: "+JSON.stringify(response.data))
        return response.data;
    
    
}