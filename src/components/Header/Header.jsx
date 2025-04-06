import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresThunk } from '../../store/slices/genresSlice'
import { PiFilmSlateBold } from "react-icons/pi";
import { changeLng } from '../../store/slices/languageSlice';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.genres)
    const { language } = useSelector(state => state.lang)

    useEffect(() => {
        dispatch(getGenresThunk(language))
    }, [language])

    return (
        <header>
            <div >
            <NavLink to={'/'}>
            <PiFilmSlateBold style={{color: 'white',fontSize: '40px'}}/>
            </NavLink>
            </div>
            <nav>
                {
                    genres.map((gener) => {
                        return <NavLink to={`/genresmovie/${gener.id}`} key={gener.id}>
                            <button className={style.btn} >{gener.name}</button>
                        </NavLink>
                    })
                }
            </nav>
            <div>
                <input type="search" name="" className={style.inp} placeholder='Search' />
                <select name="language" onChange={(e) => dispatch(changeLng(e.target.value))}>
                    <option value="en-Us">Eng</option>
                    <option value="ru-RU">Rus</option>
                </select>
            </div>
        </header>
    )
}

export default Header