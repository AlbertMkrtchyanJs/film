import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

import './App.css'
import MoviePage from './pages/MoviePage/MoviePage'


function App() {

  return (
    <>
    <Header />
    <div className='App'>
        <Routes >
          <Route path='/' element={<Home />}/> 
          <Route path='/genresmovie/:id' element={<MoviePage />}/> 
        </Routes>
    </div>
    </>
  )
}

export default App
