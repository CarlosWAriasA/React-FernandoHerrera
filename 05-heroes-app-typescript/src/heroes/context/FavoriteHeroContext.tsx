import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types";

interface FavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;

  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((f) => f.id === hero.id);

    if (heroExist) {
      setFavorites((prev) => prev.filter((f) => f.id !== hero.id));
    } else {
      setFavorites((prev) => [...prev, hero]);
    }
  };

  const isFavorite = (hero: Hero): boolean => {
    return favorites.some((f) => f.id === hero.id);
  };

  return (
    <FavoriteHeroContext
      value={{
        favorites,
        favoriteCount: favorites.length,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
