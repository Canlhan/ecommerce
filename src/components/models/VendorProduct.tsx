import { Product } from "./Product";
import { Vendor } from "./Vendor";


export interface VendorProduct{
    
    id:number,
    price:number;
    quantity:number;
    description:string;
    vendor:Vendor;
    product:Product
}