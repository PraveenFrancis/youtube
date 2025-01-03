import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoList from "./videoList";

const appStore = configureStore({
reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    videos: videoList
}
})

export default appStore