import React from 'react'
import { Carousel, Stack } from 'react-bootstrap'
import { Movie } from '../types/types';
import MovieCard from './MovieCard'
import styles from './MovieCarousel.module.scss'
type MovieCarouselProps = {
  movies: Movie[];
  onCardClick(movie: Movie): void;
}

function MovieCarousel({movies, onCardClick}: MovieCarouselProps) {
  const movies2D = getMoviesInArray(movies, 3);
  console.log("🚀 ~ file: MovieCarousel.tsx ~ line 13 ~ MovieCarousel ~ movies2D", movies2D)
  return (
    <Carousel variant="dark" interval={null} className={styles.carousel}>
    {/* <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={5}> */}
      {movies2D.map(movie => 
        <Carousel.Item className={styles.carouselItem}>
          <Stack direction='horizontal' className={styles.carouselItemStack}>
            {movie.map(m => <MovieCard movie={m} onCardClick={() => onCardClick(m)}/>)}
          </Stack>
        </Carousel.Item>)
      }

    {/* </Stack> */}
  </Carousel>
  )
}

export default MovieCarousel

function getMoviesInArray(movies: Movie[], eachN: number) {
  let newMovies : Movie[][] = [];
  for(let i = 0; i < movies.length; i = i + eachN) {
    newMovies.push(movies.slice(i, i + eachN));
    console.log("🚀 ~ file: MovieCarousel.tsx ~ line 34 ~ getMoviesInArray ~ newMovies",movies.slice(i, i + eachN))
  }
  return newMovies;
}
