import { configureStore } from "@reduxjs/toolkit";
import genresSlice from './slices/genresSlice'
import languageSlice from './slices/languageSlice' 
import movieSilce from './slices/movieSlice' 

const store = configureStore({
    reducer : {
        genres : genresSlice,
        lang : languageSlice,
        movie : movieSilce
    }
})

export default store