import { useState } from 'react';
import MovieOverlay from './MovieOverlay';
import MovieDetails from './MovieDetails';
import './TutorialView.css';
import NoImage from '../assets/NoImage.png';

// Dummy-filmer
const sampleMovies = [
	{ Title: 'Inception', Year: '2010', imdbID: 'tt1375666', Poster: 'N/A', Type: 'movie' },
	{ Title: 'The Matrix', Year: '1999', imdbID: 'tt0133093', Poster: 'N/A', Type: 'movie' },
	{ Title: 'Interstellar', Year: '2014', imdbID: 'tt0816692', Poster: 'N/A', Type: 'movie' }
];

const codeExamples = {
	searchField: `// Användning av SearchField
<SearchField onResults={(movies) => setMovies(movies)} />`,
	movieList: `// MovieList - tar bara emot data och callback
<MovieList movies={movies} onSelect={(m) => setSelected(m)} />`,
	movieCard: `// Renderas internt av MovieList
<MovieCard movie={movie} onSelect={() => onSelect(movie)} />`,
	overlay: `// Portal-baserad overlay med detaljer
{selected && (
	<MovieOverlay movie={selected} onClose={() => setSelected(null)} isFavorite={isFavorite} toggleFavorite={toggleFavorite}>
		<MovieDetails imdbID={selected.imdbID} />
	</MovieOverlay>
)}`,
	favorites: `// Hämta favoriter via context
const { favorites } = useFavorites();
<MovieList movies={favorites} onSelect={setSelected} />`,
	context: `// FavoriteContext API
const { favorites, toggleFavorite, isFavorite } = useFavorites();
toggleFavorite(movie); // lägger till eller tar bort
isFavorite(movie.imdbID); // true/false`
};

const Section = ({ title, description, code, children }) => (
  <section className="tutorial-section">
    <h2 className="tutorial-section-title">{title}</h2>
    <p className="tutorial-section-desc">{description}</p>
    {code && (
      <pre className="tutorial-section-pre">
        <code>{code}</code>
      </pre>
    )}
    <div className="tutorial-section-content">{children}</div>
  </section>
);

const DemoMovieCard = ({ movie, onSelect, isFavorite, toggleFavorite }) => {
	const posterSrc = NoImage;
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
				{fav ? '★ Demo-favorit' : '☆ Lägg till (demo)'}
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

const DemoMovieList = ({ movies, onSelect, isFavorite, toggleFavorite }) => {
	if (!movies || movies.length === 0) {
		return <div className="movie-list-empty"><p>Inga demo-filmer</p></div>;
	}
	return (
		<div className="movie-grid">
			{movies.map(m => (
				<DemoMovieCard
					key={m.imdbID}
						movie={m}
						onSelect={() => onSelect(m)}
						isFavorite={isFavorite}
						toggleFavorite={toggleFavorite}
				/>
			))}
		</div>
	);
};

const TutorialView = () => {
	const [demoMovies] = useState(sampleMovies);
	const [selected, setSelected] = useState(null);
	const [demoFavIds, setDemoFavIds] = useState(() => new Set());

	const isDemoFavorite = (id) => demoFavIds.has(id);
	const toggleDemoFavorite = (movie) => {
		setDemoFavIds(prev => {
			const next = new Set(prev);
			if (next.has(movie.imdbID)) next.delete(movie.imdbID); else next.add(movie.imdbID);
			return next;
		});
	};

	return (
		<div className="tutorial-root">
			<h1 className="tutorial-heading">Komponentguide</h1>
			<p className="tutorial-intro">
				Snabb överblick av komponenterna. Varje del har: 1) kort beskrivning 2) kod 3) live-exempel om det ger något.
			</p>

			<Section
				title="SearchField"
				description="Sökruta för titel + valfritt år. Skickar tillbaka resultat via onResults. Hanterar eget input-state."
				code={codeExamples.searchField}
			>
				<p>Ingen live-demo här (vill undvika riktiga API-anrop). Testa på startsidan.</p>
			</Section>

			<Section
				title="MovieList (demo-version här)"
				description="Visar demo-filmer med lokala favoriter så riktiga favoriter inte påverkas. Kodexemplet visar dock den riktiga komponenten."
				code={codeExamples.movieList}
			>
				<DemoMovieList movies={demoMovies} onSelect={setSelected} isFavorite={isDemoFavorite} toggleFavorite={toggleDemoFavorite} />
			</Section>

			<Section
				title="MovieCard (demo)"
				description="Lokalt kort med egen demo-favoritstatus. Riktiga MovieCard använder globalt context."
				code={codeExamples.movieCard}
			>
				<div className="tutorial-demo-row">
					{demoMovies.slice(0, 1).map(m => (
						<div key={m.imdbID} className="tutorial-demo-item">
							<DemoMovieCard movie={m} onSelect={() => setSelected(m)} isFavorite={isDemoFavorite} toggleFavorite={toggleDemoFavorite} />
						</div>
					))}
				</div>
			</Section>

			<Section
				title="MovieOverlay + MovieDetails"
				description="Overlay i portal. MovieDetails hämtar mer data via imdbID. Ger en fokuserad detaljvy."
				code={codeExamples.overlay}
			>
				<p>Klicka på en film i listan ovan för att öppna overlay.</p>
			</Section>

			<Section
				title="Favorites"
				description="Här visar vi endast antal demo-favoriter. Global favorites-sida påverkas inte."
				code={codeExamples.favorites}
			>
				<p>Demo-favoriter: <strong>{demoFavIds.size}</strong></p>
				{demoFavIds.size === 0 && <p>Klicka på stjärnan för att lägga till en demo-favorit.</p>}
			</Section>

			<Section
				title="FavoriteContext"
				description="I riktiga appen global hantering av favorites (localStorage). Här i tutorialen använder vi en separat Set."
				code={codeExamples.context}
			>
				<p>Det du gör här påverkar inte riktiga favoriter.</p>
			</Section>

			{selected && (
				<MovieOverlay
					movie={selected}
					onClose={() => setSelected(null)}
					isFavorite={isDemoFavorite}
					toggleFavorite={toggleDemoFavorite}
				>
					<MovieDetails imdbID={selected.imdbID} />
				</MovieOverlay>
			)}
		</div>
	);
};

export default TutorialView;
