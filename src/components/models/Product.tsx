import { Category } from "./Category";



export interface Product{

    productName:string;
    productPhoto:string;
    unitInStock:number;
    unitPrice:number;
    state:boolean;
    category:Category
    
    
}

