import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

    const toggleFavorite = (movie) => {
    setFavorites((prev) => {
        if (prev.some((fav) => fav.imdbID === movie.imdbID)) {
            return prev.filter(fav => fav.imdbID !== movie.imdbID);
        } else {
            return [...prev, movie]
        }
    })} 

  const isFavorite = (imdbID) => {
    return favorites.some((fav) => fav.imdbID === imdbID);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};