import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getOneMovie } from "../../store/slices/movieSlice";
import { imgUrl } from "../../constant/constant";

import style from "./OneMovie.module.css";

const OneMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.lang);
  const { movie } = useSelector((state) => state.movie);

  console.log(movie);

  useEffect(() => {
    dispatch(getOneMovie({ id, language }));
  }, [id, language, dispatch]);

  return (
    <div className={style.main}>
      <h1>{movie.title}</h1>
      <img src={imgUrl + "/w500" + movie.backdrop_path} />
      <hr />
      <div className={style.grno}>
        <p>Release will/was in : {movie.release_date}</p>
        <p className={style.rat}>
          Rate : {movie.popularity} <BsStars style={{ color: "gold" }} />
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default OneMovie;
