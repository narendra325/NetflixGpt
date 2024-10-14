import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addpopularmovies } from "./MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularmovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const data = await fetchMovies.json();
    dispatch(addpopularmovies(data.results));
  };

  useEffect(()=>{
    popularmovies()
  },[])
};

export default usePopularMovies;
