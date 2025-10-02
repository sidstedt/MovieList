import { useEffect, useState } from "react"
import { getMovieDetails } from "../api/MovieApi"

const MovieDetails = ({imdbID}) => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    getMovieDetails(imdbID)
      .then((data) => {
        if (isMounted) {
          setDetails(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Kunde inte hämta detaljer.");
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [imdbID]);

  if (loading) return <p>Laddar detaljer...</p>;
  if (error) return <p>{error}</p>;
  if (!details) return null;

  return (
    <div>
        <h4>{details.Title} ({details.Year})</h4>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>Regissör:</strong> {details.Director}</p>
        <p><strong>Skådespelare:</strong> {details.Actors}</p>
        <p><strong>Handling:</strong> {details.Plot}</p>
        <p><strong>IMDB-betyg:</strong> {details.imdbRating}</p>
    </div>
  )
}

export default MovieDetails