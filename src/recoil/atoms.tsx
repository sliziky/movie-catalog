import { atom } from "recoil";
import { Movie } from "../types/types";

export const trendingMoviesAtom = atom<Movie[]>({
  key: 'trendingMovies',
  default: []
})