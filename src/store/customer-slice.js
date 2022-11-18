

const {createSlice} =require("@reduxjs/toolkit");

const initialState={customer:{email:"",password:""}};

const customerSlice=createSlice(

    {
        name:"customer",
        initialState:initialState,
        reducers:{
            addCustomer(state,action){
                
                state.customer=action.payload;
            }
        }
    }
)

export const customerActions=customerSlice.actions;
export default customerSlice.reducer;