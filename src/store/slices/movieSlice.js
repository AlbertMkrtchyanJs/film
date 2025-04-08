import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../api/api";

export const getOneMovie = createAsyncThunk(
    'getOneMovie',
    async ({id,language}) => {
        const res = await API.getOneMovie(id,language)
        return res.data
    }
)

export const getMovieThunk = createAsyncThunk(
    "getMovieThunk",
    async ({language,pageCount}) => {
        const res = await API.getMovies(language,pageCount)
        return res.data
    }
)

const movieSlice = createSlice({
    name : "movieSilce",
    initialState : {
        movies : [],
        pageCount : 1,
        movie : {}
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
        builder.addCase(getOneMovie.fulfilled , (state,action) => {
            state.film = action.payload
        })
    }
})

export const {changePage} = movieSlice.actions

export default movieSlice.reducer