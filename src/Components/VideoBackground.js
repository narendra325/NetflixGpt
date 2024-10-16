import React from "react";
import useMovietrailer from "../Utils/useMovietrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const movietrailer = useSelector((store) => store.movies?.movietrailer);

  useMovietrailer(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movietrailer?.key +
          "?&autoplay=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
