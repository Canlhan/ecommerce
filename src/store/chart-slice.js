import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialChartState={products:[],isOpenChart:false,sumPrice:0}

const chartSlice=createSlice(

    {
        name:'chart',
        initialState:initialChartState,
        reducers:{
            addProduct(state,action){
                
               
                const existingProduct=state.products.find(({ id }) => id ===action.payload.id);
                console.log(" slicedeaki varolan obje: "+existingProduct)
                if(existingProduct===undefined)
                {
                    console.log("undefied bu obje")
                   state.products=[...state.products,action.payload];
                    
                }
                
            },
            deleteProduct(state,action){
                state.products=state.products.filter((item)=>
                    item.id!==action.payload
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
                const existingProduct=state.products.find(({ id }) => id ===action.payload);
                if(existingProduct.quantity!==1){
                    existingProduct.quantity-=1;
                }
               
                
            },
            DecreaseQuantity(state,action){
                const existingProduct=state.products.find(({ id }) => id ===action.payload);
                if(existingProduct.quantity<10){
                    existingProduct.quantity+=1;
                }
                
                
            }
            ,SetSumPrice(state,action){
                state.sumPrice=action.payload;
            }
        }
    }
)

export const chartActions=chartSlice.actions;
export default chartSlice.reducer;