import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getMovieThunk } from "../../store/slices/movieSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getGenresMoviesThunk } from "../../store/slices/genresSlice";
import Slider from "../../components/sliders/Slider/Slider";
import MovieCard from "../../components/MovieCard/movieCard";

import "swiper/css";
import "swiper/css/navigation";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, pageCount } = useSelector((state) => state.movie);
  const { language } = useSelector((state) => state.lang);
  const { genreMovies } = useSelector((state) => state.genres);

  const change = () => {
    dispatch(changePage());
  };

  useEffect(() => {
    dispatch(
      getMovieThunk({
        language,
        pageCount,
      })
    );
    dispatch(
      getGenresMoviesThunk({
        language,
        genreId: 10752,
      })
    );
  }, [language, pageCount]);

  return (
    <div className={style.home}>
      <h1>New movies</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
      >
        {movies.map((el) => {
          return (
            <SwiperSlide>
              <Slider el={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h1>Best Sellers</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
      >
        {genreMovies.map((el) => {
          return (
            <SwiperSlide>
              <Slider el={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={style.main}>
        {movies.map((el) => {
          return <MovieCard key={el.id} el={el} />;
        })}
      </div>
      <button className={style.btn} onClick={change}>
        Next
      </button>
    </div>
  );
};

export default Home;
