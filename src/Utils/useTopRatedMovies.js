import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addtopratedmovies } from "./MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topratedmovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const data = await fetchMovies.json();
    dispatch(addtopratedmovies(data.results));
  };

  useEffect(()=>{
    topratedmovies()
  },[])
};

export default useTopRatedMovies;
