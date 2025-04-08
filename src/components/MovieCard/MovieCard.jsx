import React from "react";
import { BsStars } from "react-icons/bs";
import { NavLink} from "react-router-dom";

import style from "./MovieCard.module.css";
import { imgUrl } from "../../constant/constant";

const MovieCard = ({el}) => {

  

  return (
    <div className={style.section}>
      <NavLink to={`movies/movie/${el.id}`} className={style.sec}>
        <h2 className={style.title}>{el.title}</h2>
        <img src={imgUrl + '/w400' + el.backdrop_path} />
      </NavLink>
      <div className={style.sec}>
      <p className={style.rat}>
        Rate : {el.popularity} <BsStars style={{color : 'gold'}}/>
      </p>
      <hr />
      {el.overview ? <p className={style.dec}>{el.overview}</p> : <p className={style.dec}>No Description</p>}
      </div>
    </div>
  );
};

export default MovieCard;
