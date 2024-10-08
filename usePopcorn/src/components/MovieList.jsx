/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { tempMovieData } from "../App";
import Movie from "./Movie";

function MovieList({movies}) {

    return (
        <ul className="list">
              {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
              ))}
            </ul>
    )
}

export default MovieList
