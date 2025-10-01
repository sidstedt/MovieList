import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelect, emptyFallback = <p>Inga filmer att visa</p> }) => {
  if (!movies || movies.length === 0) {
    return <div className="movie-list-empty">{emptyFallback}</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={() => onSelect && onSelect(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;