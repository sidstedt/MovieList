import MovieCard from "./MovieCard"


const Favorites = ({ favorites, onRemove }) => {
    if (!favorites || favorites.length === 0) {
        return <p>Du har inga favoriter.</p>
    }
  return (
    <div>
        <h2>Mina Favoriter</h2>
        {favorites.map((movie) => (
            <div key={movie.imdbID}>
                <MovieCard movie={movie} />
                <button onClick={() => onRemove(movie.imdbID)}>Ta bort</button>
            </div>
        ))}
    </div>
  )
}

export default Favorites