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
         
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams);
          console.log(urlparams.get("v"));
          setTrailerUrl(urlparams.get("v")); 
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
   
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, 
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
                () => handleClick(movie) 
              }
              key={index}
              src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
              alt={movie.title}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              onError={(e) => (e.target.style.display = "none")} 
               
            />
          ))}
           </div> 
      
       

        <div style={{ padding: "10px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        
        </div>
      </div>
    </>
  );
}

export default Row;
