import NoImage from "../assets/NoImage.png";
import { useFavorites } from "../context/FavoriteContext";

const MovieCard = ({ movie, onExpand, isExpanded, children }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <div>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : NoImage}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button
        onClick={e => {
          toggleFavorite(movie);
        }}
      >
        {isFavorite(movie.imdbID) ? "★ Favorit" : "☆ Lägg till favorit"}
      </button>
      <button onClick={onExpand}>
        {isExpanded ? "Dölj info" : "Visa mer"}
      </button>
      {isExpanded && children}
    </div>
  );
};

export default MovieCard;