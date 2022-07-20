
export type Movie = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export type TrendingMoviesData = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export type TrendingMoviesRequest = {
  data: TrendingMoviesData;
}

export type Genre = {
  id: number;
  name: string;
}

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
}

export type SpokenLanguage = {
  iso_639_1: string;
  name: string;
}

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: any;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MovieDetailsRequest = {
  data: MovieDetails;
}
