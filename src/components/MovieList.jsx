import { useState } from "react"
import MovieCard from "./MovieCard"
import MovieDetails from "./MovieDetails"

const MovieList = ({movies}) => {
    const [expandedId, setExpandedId] = useState(null)

    const handleToggle = (imdbID) => {
        setExpandedId(expandedId === imdbID ? null : imdbID)
    }

    if (!movies || movies.length === 0) {
        return <p>Inga filmer att visa</p>
    }
  return (
    <>
        {movies.map((movie) => (
            <div key={movie.imdbID}>
                <div onClick={() => handleToggle(movie.imdbID)}>
                <MovieCard key={movie.imdbID} movie={movie} />
                </div>
                {expandedId === movie.imdbID && (
                    <MovieDetails imdbID={movie.imdbID} />
                )}
            </div>
        ))}
    </>
  )
}

export default MovieList