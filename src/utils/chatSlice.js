import { createSlice } from "@reduxjs/toolkit";
import { NO_OF_COMMENTS } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) =>{
            if(state.messages.length > NO_OF_COMMENTS){
                state.messages.splice(0, 1);

            }
            state.messages.push(action.payload)
        }
    }
})

export const { addMessage} = chatSlice.actions
export default chatSlice.reducer