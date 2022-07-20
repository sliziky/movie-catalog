import axios from 'axios';
import React from 'react'
import { useRecoilState } from 'recoil';
import MovieCard from '../components/MovieCard';
import { trendingMoviesAtom } from '../recoil/atoms';
import { Movie, TrendingMoviesRequest } from '../types/types';
import { Slide } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../config/config';
import { Carousel, Container, Stack } from 'react-bootstrap';
import MovieCarousel from '../components/MovieCarousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function HomePage() {
  
  const [trendingMovies, setTrendingMovies] = useRecoilState(trendingMoviesAtom);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    const fetchTrendingMovies = async() => {
      const { data } : TrendingMoviesRequest = await apiClient.get(`/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
      setTrendingMovies(data.results);
    }
    fetchTrendingMovies();
  }, [setTrendingMovies]);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  const onCardClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <div>
      <Container>
        <MovieCarousel movies={trendingMovies} onCardClick={onCardClick}/>
      </Container>
    </div>
  )
}

export default HomePage