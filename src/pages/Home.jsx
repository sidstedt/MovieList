import { useState} from "react"
import SearchField from "../components/SearchField"

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
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.imdbID}>
                            {movie.Title} ({movie.Year})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default Home