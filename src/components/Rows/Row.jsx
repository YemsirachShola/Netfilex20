import React from "react";
import  { useEffect, useState } from "react";
import axios from "../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_Url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          //   const urlParams = new URLSearchParams(new URL(url).search);
          //   const videoId = urlParams.get("v");
          //   console.log(videoId);
          //   setTrailerUrl(videoId);
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search); // extracting the video id by parsind whts returned from the movie-trailer
          console.log(urlparams);
          console.log(urlparams.get("v"));
          setTrailerUrl(urlparams.get("v")); // seting the newly extracted video id starts with (v=jkhk1233)
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    //this is to mean options, the measures are the sizes of the videos
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, //this means it is on for autoplay
    },
  };
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
          {movie?.map((movie, index) => (
            <img
              onClick={
                () => handleClick(movie) //handle the movie
              }
              key={index}
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} //displays the side of the movie
              alt={movie.title}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} //it takes only if it is large
            />
          ))}
        </div>

        <div style={{ padding: "10px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          {/* //the first curley brace is jaascript, the second curley brace is we are writing another function in css styes, if trailerUrl is there, play the video on youtube */}
        </div>
      </div>
    </>
  );
}

export default Row;
