import React from "react";
import Card from "./Card";

const Movielist = ({ title, movies }) => {
  return (
    <div className="text-white ">
      <h1 className=" font-bold text-2xl py-6 px-4">{title}</h1>
      <div className="mt-0 pl-4 flex overflow-x-auto scrollbar-hidden ">
        <div className="flex">
          {movies?.map((movie) => (
            <Card key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
