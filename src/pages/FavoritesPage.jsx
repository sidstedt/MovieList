import Favorites from "../components/Favorites"
import { useFavorites } from "../context/FavoriteContext"

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useFavorites()

  return (
    <div>
        <h1>Mina Favoriter</h1>
        <Favorites favorites={favorites} onRemove={toggleFavorite} />
    </div>
  )
}

export default FavoritesPage