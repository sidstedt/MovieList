const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = "https://www.omdbapi.com/"

export async function searchMovies(query, year = "") {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}${year ? `&y=${year}` : ""}`
    const response = await fetch(url)
    const data = await response.json()
    return data.Search || []
}

export async function getMovieDetails(imdbID) {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
    const response = await fetch(url)
    return await response.json()
}