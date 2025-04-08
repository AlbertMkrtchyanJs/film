import axios from "axios"

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

const API = {
    getGenres(language) {
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=${language}`)
    },
    getMovies(language,pageCount = 1) {
        return instance.get(`discover/movie?api_key=${apiKey}&language=${language}&page=${pageCount}`)
    },
    getGenersMovies(language,genreId) {
        return instance.get(`/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=${1}`)
    },
    getOneMovie(id,language){
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=${language}`)
    }
}

export default API