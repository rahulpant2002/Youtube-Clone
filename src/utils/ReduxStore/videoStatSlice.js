import { createSlice } from "@reduxjs/toolkit";

const videoStatSlice = createSlice({
    name : "videoStat",
    initialState : {
        isSubscribed : {videoId : false},
        isLiked : {videoId : false},
    },
    reducers : {
        toggleSubscribe : (state, action)=>{
            state.isSubscribed[action.payload] = !state.isSubscribed[action.payload];
        },
        toggleLike : (state, action)=>{
            state.isLiked[action.payload] = !state.isLiked[action.payload];
        }
    }
})
export const {toggleLike, toggleSubscribe} = videoStatSlice.actions;
export default videoStatSlice.reducer;