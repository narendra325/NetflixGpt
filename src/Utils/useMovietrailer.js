import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addmovietrailer } from "./MovieSlice";

const useMovietrailer = (movieid) => {
  const dispatch = useDispatch();
  const movietrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      options
    );
    const json = await data.json();

    const trailers = json.results.filter((result) => result.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];

    dispatch(addmovietrailer(trailer));
  };

  useEffect(() => {
    movietrailer();
  }, []);
};

export default useMovietrailer;
