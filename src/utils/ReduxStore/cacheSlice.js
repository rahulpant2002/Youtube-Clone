import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name : 'cache',
    initialState : {
        storage : {},
    },
    reducers : {
        addCache : (state, action)=>{
            state.storage = {...state.storage, ...action.payload};
        }   
    }
})
export const {addCache} = cacheSlice.actions;
export default cacheSlice.reducer;