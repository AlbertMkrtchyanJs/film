import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MoviePage from './pages/MoviePage/MoviePage'

import './App.css'
import OneMovie from './pages/OneMovie/OneMovie'


function App() {

  return (
    <>
    <Header />
    <div className='App'>
        <Routes >
          <Route path='/' element={<Home />}/> 
          <Route path='/genresmovie/:id' element={<MoviePage />}/>
          <Route path='/movies/movie/:id' element={<OneMovie />}/> 
        </Routes>
    </div>
    </>
  )
}

export default App
