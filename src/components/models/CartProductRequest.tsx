import { VendorProduct } from "./VendorProduct";



export interface CartProductRequest{
    quantity:number,
    cartId:number,
    vendorProducts:any[]
}