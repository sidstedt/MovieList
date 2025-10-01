import { createPortal } from "react-dom";
import NoImage from "../assets/NoImage.png";

const MovieOverlay = ({ movie, onClose, isFavorite, toggleFavorite, children }) => {
  return createPortal(
    <div
      className="movie-card-expanded-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Mer information om ${movie.Title}`}
      onClick={onClose}
    >
      <div
        className="movie-card-expanded-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="expanded-header">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : NoImage}
            alt={movie.Title}
            className="movie-poster large"
          />
          <div className="expanded-header-meta">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            {toggleFavorite && isFavorite && (
              <button
                type="button"
                className="favorite-btn"
                onClick={() => toggleFavorite(movie)}
              >
                {isFavorite(movie.imdbID) ? "★ Favorit" : "☆ Lägg till favorit"}
              </button>
            )}
          </div>
        </div>
        
        <div className="expanded-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MovieOverlay