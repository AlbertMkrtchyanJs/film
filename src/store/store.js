import { configureStore } from "@reduxjs/toolkit";
import genresSlice from './slices/genresSlice'
import languageSlice from './slices/languageSlice' 
import movieSlice from './slices/movieSlice' 

const store = configureStore({
    reducer : {
        genres : genresSlice,
        lang : languageSlice,
        movie : movieSlice
    }
})

export default store