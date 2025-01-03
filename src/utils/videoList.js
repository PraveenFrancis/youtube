import { createSlice } from "@reduxjs/toolkit";

const videoList = createSlice({
    name: "videos",
    initialState: {
        videos: []
    },
    reducers: {
        getVideos: (state, action) =>{
            state.videos = action.payload;
        }
    }
})

export const {getVideos} = videoList.actions
export default videoList.reducer