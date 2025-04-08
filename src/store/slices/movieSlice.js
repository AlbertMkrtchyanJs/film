import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const getOneMovie = createAsyncThunk(
  "getOneMovie",
  async ({ id, language }) => {
    const res = await API.getOneMovie(id, language);
    return res.data;
  }
);

export const getMovieThunk = createAsyncThunk(
  "getMovieThunk",
  async ({ language, pageCount }) => {
    const res = await API.getMovies(language, pageCount);
    return res.data;
  }
);

export const getSearchMovie = createAsyncThunk(
  "getSearchMovie",
  async (text) => {
    const res = await API.searchMovie(text);
    return res.data;
  }
);

const movieSlice = createSlice({
  name: "movieSilce",
  initialState: {
    movies: [],
    pageCount: 1,
    movie: {},
    text: "",
    searchArr: [],
  },
  reducers: {
    changePage(state) {
      ++state.pageCount;
    },
    changeText(state, action) {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieThunk.fulfilled, (state, action) => {
      state.movies = action.payload.results;
    });
    builder.addCase(getOneMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(getSearchMovie.fulfilled, (state, action) => {
      state.searchArr = action.payload.results;
    });
  },
});

export const { changePage,changeText } = movieSlice.actions;

export default movieSlice.reducer;
