import React, { useEffect } from 'react'
import style from './OneMovie.module.css'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneMovie } from '../../store/slices/movieSlice'
import { imgUrl } from '../../constant/constant'

const OneMovie = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {language} = useSelector((state) => state.lang)
    const {movie} = useSelector((state) => state.movie)

    console.log(movie);
    

    useEffect(() => {
        dispatch(getOneMovie({id,language}))
    },[id,language,movie])

  return (
    <div>
        {imgUrl + '/w800' + movie.backdrop_path}
    </div>
  )
}

export default OneMovie