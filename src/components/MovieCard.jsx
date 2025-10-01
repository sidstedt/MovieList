import NoImage from "../assets/NoImage.png"
import { useFavorites } from "../context/FavoriteContext"

const MovieCard = ({movie}) => {
    const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div>
        <img
            src={movie.Poster !== "N/A" ? movie.Poster : NoImage}
            alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button onClick={() => toggleFavorite(movie)}>
            {isFavorite(movie.ImdbID) ? "Ta bort favorit" : " Lägg till favorit"}
        </button>
    </div>
  )
}

export default MovieCard