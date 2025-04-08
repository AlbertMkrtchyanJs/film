import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenresMoviesThunk } from "../../store/slices/genresSlice";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../constant/constant";

import style from "./MoviePage.module.css";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.lang);
  const { genreMovies } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(
      getGenresMoviesThunk({
        language,
        genreId: id,
      })
    );
  }, [id, language]);

  return (
    <>
      <div className={style.movies}>
        {genreMovies.map((el) => {
          return (
            <div key={el.id} className={style.genre}>
              <img
                src={imgUrl + '/w400' + el.backdrop_path}
              />
              <h2 className={style.h3}>{el.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviePage;
