import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movietrailer: null,
    popularmovies: null,
    upcomingmovies: null,
    topratedmovies:null,
    tvshows : null,

  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addmovietrailer: (state, action) => {
      state.movietrailer = action.payload;
    },
    addpopularmovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addupcomingmovies: (state, action) => {
      state.upcomingmovies = action.payload;
    },
    addtopratedmovies: (state, action) => {
      state.topratedmovies = action.payload;
    },
    addtvshows: (state, action) => {
      state.tvshows = action.payload;
    },
  },
});

export const {
  addnowplayingmovies,
  addmovietrailer,
  addpopularmovies,
  addupcomingmovies,
  addtopratedmovies,
  addtvshows
} = MovieSlice.actions;
export default MovieSlice.reducer;
