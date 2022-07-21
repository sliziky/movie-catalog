import { atom } from "recoil";
import { Movie } from "../types/types";

export const trendingMoviesAtom = atom<Movie[]>({
  key: 'trendingMovies',
  default: []
})

export const userFavouriteMoviesAtom = atom<Movie[]>({
  key: 'userFavouriteMovies',
  default: []
})

export const userAtom = atom({
  key: 'user',
  default: null
})