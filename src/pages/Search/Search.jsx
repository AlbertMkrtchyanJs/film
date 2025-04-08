import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/movieCard'

const Search = () => {
  const [isOpen,setIsOpen] = useState(false)

    const {searchArr} = useSelector((state) => state.movie)

  return (
    <div>
        {
            searchArr.map((el) => isOpen && <MovieCard key={el.id} el={el}/>)
        }
    </div>
  )
}

export default Search