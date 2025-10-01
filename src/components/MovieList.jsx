import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

const MovieList = ({ movies }) => {
  const [expandedId, setExpandedId] = useState(null);

  if (!movies || movies.length === 0) {
    return <p>Inga filmer att visa</p>;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isExpanded={expandedId === movie.imdbID}
          onExpand={() =>
            setExpandedId(expandedId === movie.imdbID ? null : movie.imdbID)
          }
        >
          {expandedId === movie.imdbID && (
            <MovieDetails imdbID={movie.imdbID} />
          )}
        </MovieCard>
      ))}
    </>
  );
};

export default MovieList;