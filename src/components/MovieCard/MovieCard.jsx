import React from "react";
import { BsStars } from "react-icons/bs";

import style from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className={style.section}>
      <div className={style.sec}>
        <h2 className={style.title}>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`} />
      </div>
      <div className={style.sec}>
      <p className={style.rat}>
        Rate : {movie.popularity} <BsStars style={{color : 'gold'}}/>
      </p>
      <hr />
      {movie.overview ? <p className={style.dec}>{movie.overview}</p> : <p className={style.dec}>No Description</p>}
      </div>
    </div>
  );
};

export default MovieCard;
