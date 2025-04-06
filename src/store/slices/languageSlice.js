import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "languageSlice",
    initialState: {
        language: "en-US"
    },
    reducers: {
        changeLng(state, action) {
            state.language = action.payload
        }
    }
})

export const { changeLng } = languageSlice.actions
export default languageSlice.reducer