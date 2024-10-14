import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addupcomingmovies } from "./MovieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingmovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const data = await fetchMovies.json();
    dispatch(addupcomingmovies(data.results));
  };

  useEffect(()=>{
    upcomingmovies()
  },[])
};

export default useUpcomingMovies;
