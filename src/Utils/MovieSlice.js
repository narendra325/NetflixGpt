import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movietrailer : null
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
    },
    addmovietrailer :(state,action)=>{
        state.movietrailer = action.payload
    }
  },
});

export const { addnowplayingmovies ,addmovietrailer } = MovieSlice.actions;
export default MovieSlice.reducer;
