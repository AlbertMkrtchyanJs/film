import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/api";

export const getGenresThunk = createAsyncThunk(
  "getGenres",
  async (language) => {
    const res = await API.getGenres(language);
    return res.data.genres;
  }
);

export const getGenresMoviesThunk = createAsyncThunk(
  "getGenresMoviesThunk",
  async ({ language, genreId }) => {
    const res = await API.getGenersMovies(language, genreId);

    return res.data.results;
  }
);

const genresSlice = createSlice({
  name: "genresSlice",
  initialState: {
    genres: [],
    genreMovies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getGenresThunk.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
    builder.addCase(getGenresMoviesThunk.fulfilled, (state, action) => {
      state.genreMovies = action.payload;
    });
  },
});

export default genresSlice.reducer;
