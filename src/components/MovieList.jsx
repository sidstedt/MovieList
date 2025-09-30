import MovieCard from "./MovieCard"

const MovieList = ({movies}) => {
    if (!movies || movies.length === 0) {
        return <p>Inga filmer att visa</p>
    }
  return (
    <>
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </>
  )
}

export default MovieList