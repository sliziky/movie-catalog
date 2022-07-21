import Card from 'react-bootstrap/Card';
import { Movie } from '../types/types'
import styles from './MovieCard.module.scss'
import { getPosterUrl } from '../config/config';
import { Button } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { userAtom, userFavouriteMoviesAtom } from '../recoil/atoms';

type MovieCardProps = {
  movie: Movie;
  onCardClick(): void;
  onAddToFavouritesClick(): void;
}

function MovieCard({ movie, onCardClick, onAddToFavouritesClick }: MovieCardProps) {

  const posterUrl = `${getPosterUrl(300)}${movie.poster_path}`;
  const user = useRecoilValue(userAtom);
  const movieInFavourites = useRecoilValue(userFavouriteMoviesAtom).find(m => m.id === movie.id);

  return (
    <>
      <Card className={styles.movieCard}>
        <Card.Img className={styles.movieCardPoster} onClick={() => onCardClick()} variant="top" src={posterUrl} />
        <Card.Body className={styles.movieCardBody}>
          <Card.Text>
            {movie.title}
          </Card.Text>
        </Card.Body>
        {user &&
          <Card.Footer>
            <Button variant="primary" disabled={!!movieInFavourites} onClick={() => onAddToFavouritesClick()}>
              {movieInFavourites ? "Already in favourites" : "Add to favourites"}
            </Button>
          </Card.Footer>
        }
      </Card>
    </>
  )
}

export default MovieCard