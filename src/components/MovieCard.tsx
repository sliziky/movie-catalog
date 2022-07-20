import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react'
import { Movie } from '../types/types'
// import { makeStyles } from '@mui/styles';

type MovieCardProps = {
  movie: Movie;
  onCardClick(): void;
}

function MovieCard({movie, onCardClick}: MovieCardProps) {
  const [showMovieData, setShowMovieData] = React.useState(false);
  return (
    <Card sx={{ width: 300, minHeight: 500 }} onClick={() => onCardClick()} onMouseOver={() => setShowMovieData(true)} onMouseOut={() => setShowMovieData(false)}>
    <CardMedia
      component="img"
      height="500"
      image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt="green iguana"
    />
    {showMovieData && <CardContent>{movie.overview}</CardContent>}
    {/* <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {movie.overview}
      </Typography>
    </CardContent> */}
  </Card>
  )
}

export default MovieCard