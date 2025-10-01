import { useState } from "react";
import SearchField from "../components/SearchField";
import MovieList from "../components/MovieList";
import MovieOverlay from "../components/MovieOverlay";
import MovieDetails from "../components/MovieDetails";
import { useFavorites } from "../context/FavoriteContext";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState(null);
    const { isFavorite, toggleFavorite } = useFavorites();

    return (
        <>
            <h1>Filmdatabas</h1>
            <SearchField onResults={setMovies} />
            <MovieList
                movies={movies}
                onSelect={setSelected}
                emptyFallback={<p>Sök efter en film för att börja</p>}
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

export default Home;