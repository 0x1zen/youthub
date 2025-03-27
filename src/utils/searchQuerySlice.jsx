import {createSlice} from "@reduxjs/toolkit";
const searchQuerySlice = createSlice({
    name:"searchQuery",
    initialState:"",
    reducers:{
        addQuery: (state,action)=>{
            return action.payload;
        },
        removeQuery : (state)=>{
            return "";
        }
    }
})
export const {addQuery,removeQuery}=searchQuerySlice.actions;
export default searchQuerySlice.reducer;