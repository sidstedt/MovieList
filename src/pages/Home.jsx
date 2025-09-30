import { useState} from "react"
import SearchField from "../components/SearchField"
import MovieList from "../components/MovieList"

const Home = () => {
    const [movies, setMovies] = useState([])
  return (
    <div>
        <h1>Filmdatabas</h1>
        <SearchField onResults={setMovies} />
        {/* När MovieList är klar, ersätt nedan */ }
        <div>
            {movies.length === 0 ? (
                <p>Inga filmer att visa</p>
            ) : (
                <MovieList movies={movies} />
            )}
        </div>
    </div>
  )
}

export default Home