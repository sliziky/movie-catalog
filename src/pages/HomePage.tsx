import React from 'react'
import { useRecoilState } from 'recoil';
import { trendingMoviesAtom, userAtom, userFavouriteMoviesAtom } from '../recoil/atoms';
import { Movie, TrendingMoviesRequest } from '../types/types';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../config/config';
import { Container } from 'react-bootstrap';
import MovieCarousel from '../components/MovieCarousel';

function HomePage() {

  const [trendingMovies, setTrendingMovies] = useRecoilState(trendingMoviesAtom);
  const [, setUser] = useRecoilState(userAtom);
  const [, setUserFavouriteMovies] = useRecoilState(userFavouriteMoviesAtom);
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('currentUser') as string));
    setUserFavouriteMovies(JSON.parse(localStorage.getItem('userFavouriteMovies') as string) || []);
  }, [setUser, setUserFavouriteMovies]);

  React.useEffect(() => {
    const fetchTrendingMovies = async () => {
      const { data }: TrendingMoviesRequest = await apiClient.get(`/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
      setTrendingMovies(data.results);
    }
    fetchTrendingMovies();
  }, [setTrendingMovies]);

  const onCardClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <div>
      <Container>
        <MovieCarousel movies={trendingMovies} onCardClick={onCardClick} />
      </Container>
    </div>
  )
}

export default HomePage