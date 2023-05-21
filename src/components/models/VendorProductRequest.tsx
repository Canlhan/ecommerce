
import { Product } from "./Product";
import { Vendor } from "./Vendor";


export interface VendorProductRequest{
    
   
    price:number;
    quantity:number;
    description:string;
    vendor:Vendor;
    product:Product
}