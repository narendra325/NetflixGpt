import Header from "./Header";
import useNowPlayingMovies from "../Utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../Utils/usePopularMovies";
import useTopRatedMovies from "../Utils/useTopRatedMovies";
import useUpcomingMovies from "../Utils/useUpcomingMovies";
import useTVshows from "../Utils/useTVshows";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVshows()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Browse;
