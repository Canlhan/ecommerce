import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialChartState={products:[],isOpenChart:false}

const chartSlice=createSlice(

    {
        name:'chart',
        initialState:initialChartState,
        reducers:{
            addProduct(state,action){
                
               
                const existingProduct=state.products.find(({ productId }) => productId ===action.payload.productId);
                console.log(existingProduct)
                if(existingProduct===undefined)
                {
                    console.log("undefied bu obje")
                   state.products=[...state.products,action.payload];
                    
                }
                else{
                    existingProduct.quantity+=1;
                    console.log(existingProduct.quantity)
                } 
            },
            deleteProduct(state,action){
                state.products=state.products.filter((item)=>
                    item.productId!==action.payload
                )
            },
            toggleChart(state){
                state.isOpenChart=!state.isOpenChart
            },
            setTrueChart(state){
                state.isOpenChart=true;
            },
            setfalseChart(state){
                state.isOpenChart=false;
            },
            IncreaseQuantity(state,action){
                const existingProduct=state.products.find(({ productId }) => productId ===action.payload);
                if(existingProduct.quantity!==1){
                    existingProduct.quantity-=1;
                }
               
                
            },
            DecreaseQuantity(state,action){
                const existingProduct=state.products.find(({ productId }) => productId ===action.payload);
                existingProduct.quantity+=1;
                
            }
        }
    }
)

export const chartActions=chartSlice.actions;
export default chartSlice.reducer;