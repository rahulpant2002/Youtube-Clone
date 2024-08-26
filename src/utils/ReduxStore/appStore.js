import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import videoStatSlice from "./videoStatSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer : {
        app : appSlice,
        cache : cacheSlice,
        videoStat : videoStatSlice,
        chat : chatSlice,
    }
})
export default appStore;