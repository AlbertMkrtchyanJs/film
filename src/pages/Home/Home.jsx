import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieThunk } from '../../store/slices/movieSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { getGenresMoviesThunk } from '../../store/slices/genresSlice';
import HomeSlider from '../../components/sliders/HomeSlider/HomeSlider';

import 'swiper/css';
import 'swiper/css/navigation';

import style from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movie)
    const { language } = useSelector(state => state.lang)
    const { genreMovies } = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getMovieThunk({
            language,
            pageCount: 1
        }))
        dispatch(getGenresMoviesThunk({
            language,
            genreId: 10752
        }))
    }, [language])

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
                {
                    movies.map((el) => {
                        return <SwiperSlide><HomeSlider el={el}/></SwiperSlide>
                    })
                }
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
                    return <SwiperSlide><HomeSlider el={el} /></SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Home