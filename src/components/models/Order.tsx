import { OrderProductRequest } from "./OrderProductRequest";




export interface Order{
    quantity:number,
    customerId:number,
    orderProducts:OrderProductRequest[],
    vendorIds:number[]

}