import React from "react";
import { BsStars } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";

import style from "./MovieCard.module.css";
import { imgUrl } from "../../constant/constant";

const MovieCard = ({ movie }) => {
  console.log(movie);
  

  return (
    <div className={style.section}>
      <NavLink to={`movies/movie/${movie.id}`} className={style.sec}>
        <h2 className={style.title}>{movie.title}</h2>
        <img src={imgUrl + '/w400' + movie.backdrop_path} />
      </NavLink>
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
