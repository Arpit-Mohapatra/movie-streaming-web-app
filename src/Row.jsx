import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
const Row = ({ title, fetchURL, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLarge && "row_posterLarge"}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
};
export default Row;
