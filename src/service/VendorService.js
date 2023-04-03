
import axios from "axios";
import jwt_decode from 'jwt-decode';



export async function getVendorByEmail(email){

    const response=await axios.get(`http://localhost:8089/api/v1/vendors/${email}`)
    // buradan devam 
}
