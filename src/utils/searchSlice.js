import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        
    },
    reducers: {
        setSuggestions : (state, action) =>{
            state = Object.assign(state, action.payload)
        }
    }
})

export const {setSuggestions} = searchSlice.actions
export default searchSlice.reducer