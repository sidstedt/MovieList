import NoImage from "../assets/NoImage.png";
import { useFavorites } from "../context/FavoriteContext";

const MovieCard = ({ movie, onSelect }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const posterSrc = movie.Poster !== "N/A" ? movie.Poster : NoImage;
  const fav = isFavorite(movie.imdbID);

  return (
    <div className="movie-card">
      <img src={posterSrc} alt={movie.Title} className="movie-poster" />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button
        type="button"
        className="favorite-btn"
        aria-pressed={fav}
        onClick={() => toggleFavorite(movie)}
      >
        {fav ? "★ Favorit" : "☆ Lägg till favorit"}
      </button>
      <button
        type="button"
        className="expand-btn"
        onClick={onSelect}
      >
        Mer info
      </button>
    </div>
  );
};

export default MovieCard;