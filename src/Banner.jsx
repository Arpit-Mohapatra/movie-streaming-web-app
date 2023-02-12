import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
// import background from "./images/netflix-banner.png";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <div className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <div className="banner_description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};
export default Banner;
