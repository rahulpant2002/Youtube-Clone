import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import videoStatSlice from "./videoStatSlice";

const appStore = configureStore({
    reducer : {
        app : appSlice,
        cache : cacheSlice,
        videoStat : videoStatSlice,
    }
})
export default appStore;