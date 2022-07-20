import Card from 'react-bootstrap/Card';
import React from 'react'
import { Movie } from '../types/types'
import styles from './MovieCard.module.scss'
type MovieCardProps = {
  movie: Movie;
  onCardClick(): void;
}

function MovieCard({movie, onCardClick}: MovieCardProps) {
  const [showMovieData, setShowMovieData] = React.useState(false);
  return (
    <>
    <Card className={styles.movieCard} onClick={() => onCardClick()}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} height="400px" width="200px"/>
      <Card.Body className={styles.movieCardBody}>
        <Card.Text>
          {movie.title}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
  )
}

export default MovieCard