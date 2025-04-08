import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";


export const getMovieThunk = createAsyncThunk(
    "getMovieThunk",
    async ({language,pageCount}) => {
        const res = await FilmAPI.getMovies(language,pageCount)
        
        return res.data
    }
)

const movieSlice = createSlice({
    name : "movieSilce",
    initialState : {
        movies : [],
        pageCount : 1,
        movie : []
    },
    reducers: {
        changePage(state){
            ++state.pageCount
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getMovieThunk.fulfilled , (state,action) => {
            state.movies = action.payload.results  
        })
    }
})

export const {changePage} = movieSlice.actions

export default movieSlice.reducer