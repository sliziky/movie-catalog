import React from 'react'
import { Carousel, Stack } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { createSubarrayEachNthItem } from '../helpers/helpers';
import { userFavouriteMoviesAtom } from '../recoil/atoms';
import { Movie } from '../types/types';
import MovieCard from './MovieCard'
import styles from './MovieCarousel.module.scss'
import Notification from './Notification'

type MovieCarouselProps = {
  movies: Movie[];
  onCardClick(movie: Movie): void;
}

function MovieCarousel({ movies, onCardClick }: MovieCarouselProps) {
  const moviesSplitIntoCarouselPages = React.useMemo(() => createSubarrayEachNthItem(movies, 3), [movies]);
  const [showNotification, setShowNotification] = React.useState(false);
  const [favourites, setFavourites] = useRecoilState(userFavouriteMoviesAtom);

  const onAddToFavouritesClick = (movie: Movie) => {
    if (favourites.find(m => m.id === movie.id)) {
      return;
    }
    const newFavourites: Movie[] = [...favourites];
    newFavourites.push(movie);
    setFavourites(newFavourites);
    setShowNotification(true);
    localStorage.setItem('userFavouriteMovies', JSON.stringify(newFavourites));
  }

  return (
    <>
      <Carousel className={styles.carousel} variant="dark" interval={null}>
        {moviesSplitIntoCarouselPages.map((movie, index) =>
          <Carousel.Item className={styles.carouselItem} key={index}>
            <Stack className={styles.carouselItemStack} direction='horizontal'>
              {movie.map(m => <MovieCard key={m.id} movie={m} onCardClick={() => onCardClick(m)} onAddToFavouritesClick={() => onAddToFavouritesClick(m)} />)}
            </Stack>
          </Carousel.Item>
        )}
      </Carousel>
      <Notification visible={showNotification} onClose={() => setShowNotification(false)} />
    </>
  )
}

export default MovieCarousel