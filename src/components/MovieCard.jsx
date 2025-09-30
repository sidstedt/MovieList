import NoImage from "../assets/NoImage.png"
const MovieCard = ({movie}) => {
  return (
    <div>
        <img
            src={movie.Poster !== "N/A" ? movie.Poster : NoImage}
            alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
    </div>
  )
}

export default MovieCard