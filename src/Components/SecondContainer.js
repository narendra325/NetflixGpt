import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store)=> store.movies?.popularmovies)
  const toprated = useSelector((store) => store.movies?.topratedmovies)
  const upcoming = useSelector((store) => store.movies?.upcomingmovies)
  const tvshows = useSelector((store)=> store.movies?.tvshows)

  return (
    movies && (
      <div className="p-8 bg-black w-screen " >
        <div className="-mt-72 relative z-20">
        <Movielist title={"Now Playing"} movies={movies} />
        <Movielist title={"Popular Movies"} movies={popular} />
        <Movielist title={"TV shows"} movies={tvshows} />
        <Movielist title={"Top Rated"} movies={toprated} />
        <Movielist title={"Upcoming Movies"} movies={upcoming} />
        
        </div>
       
   
      </div>
    )
  );
};

export default SecondContainer;
