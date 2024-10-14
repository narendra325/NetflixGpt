import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addtvshows } from "./MovieSlice";

const useTVshows = () => {
  const dispatch = useDispatch();
  const tvshows = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    );
    const data = await fetchMovies.json();

    dispatch(addtvshows(data.results));
  };

  useEffect(() => {
    tvshows();
  }, []);
};

export default useTVshows;
