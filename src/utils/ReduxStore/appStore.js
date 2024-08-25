import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";

const appStore = configureStore({
    reducer : {
        app : appSlice,
        cache : cacheSlice,
    }
})
export default appStore;