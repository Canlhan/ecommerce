import { OrderProductRequest } from "./OrderProductRequest";




export interface Order{
    customerId:number,
    orderProducts:OrderProductRequest[],
    vendorIds:number[]

}