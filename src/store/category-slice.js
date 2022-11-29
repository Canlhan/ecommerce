const { createSlice } = require("@reduxjs/toolkit");

const initialCategoryState={categories:[]}

const categorySlice=createSlice(

    {
        name:'categories',
        initialState:initialCategoryState,
        reducers:{
            
           
            
        setCategories(state,action){
                state.categories=action.payload;
            }
        }
    }
)

export const categoryActions=categorySlice.actions;
export default categorySlice.reducer;