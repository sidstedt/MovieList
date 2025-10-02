import { useState } from "react";
import { useFavorites } from "../context/FavoriteContext";
import MovieList from "./MovieList";
import MovieOverlay from "./MovieOverlay";
import MovieDetails from "./MovieDetails";

const Favorites = ({ emptyFallback = <p>Du har inga favoriter</p> }) => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <MovieList
        movies={favorites}
        onSelect={setSelected}
        emptyFallback={emptyFallback}
      />
      {selected && (
        <MovieOverlay
          movie={selected}
          onClose={() => setSelected(null)}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        >
          <MovieDetails imdbID={selected.imdbID} />
        </MovieOverlay>
      )}
    </>
  );
};

export default Favorites;