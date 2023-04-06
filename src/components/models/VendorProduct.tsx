import { Product } from "./Product";
import { Vendor } from "./Vendor";


export interface VendorProduct{
    

    price:number;
    quantity:number;
    description:string;
    vendor:Vendor;
    product:Product
}