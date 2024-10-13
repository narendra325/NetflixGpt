import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "./MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const Playingmovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await fetchMovies.json();

    dispatch(addnowplayingmovies(data.results));
  };

  useEffect(() => {
    Playingmovies();
  }, []);
};

export default useNowPlayingMovies;
