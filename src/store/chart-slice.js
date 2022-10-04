import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialChartState={products:[],isOpenChart:false}

const chartSlice=createSlice(

    {
        name:'chart',
        initialState:initialChartState,
        reducers:{
            addProduct(state,action){
                state.products=[...state.products,action.payload]
            },
            deleteProduct(state,action){
                state.products=state.products.filter((item)=>
                    item.productName!==action.payload
                )
            },
            toggleChart(state){
                state.isOpenChart=!state.isOpenChart
            },
            setTrueChart(state){
                state.isOpenChart=true;
            }
        }
    }
)

export const chartActions=chartSlice.actions;
export default chartSlice.reducer;