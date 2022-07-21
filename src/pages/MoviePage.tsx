import React from 'react'
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom'
import { Movie, MovieDetails, MovieDetailsRequest } from '../types/types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { apiClient } from '../config/config';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import styles from './MoviePage.module.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom, userFavouriteMoviesAtom } from '../recoil/atoms';
function MoviePage() {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails | null>(null);
  const movieInFavourites = useRecoilValue(userFavouriteMoviesAtom).find(m => m.id === parseInt(id || "0"));
  const user = useRecoilValue(userAtom);
  const [favourites, setFavourites] = useRecoilState(userFavouriteMoviesAtom);

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data }: MovieDetailsRequest = await apiClient.get(`/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
      setMovieDetails(data);
    }
    fetchMovieDetails();
  }, [id]);

  const onAddToFavouritesClick = () => {
    if (!movieDetails) {
      return;
    }
    if (favourites.find(m => m.id === movieDetails.id)) {
      return;
    }

    const newFavourites: Movie[] = [...favourites];
    newFavourites.push(movieDetails as unknown as Movie);
    setFavourites(newFavourites);
    localStorage.setItem('userFavouriteMovies', JSON.stringify(newFavourites));
  }

  if (!movieDetails) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  return (
    <>
      <div className={styles.moviePageContainer}>
        <Stack direction={"row"} gap={"10px"}>
          <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt="Movie_Poster"></img>
          <Stack gap={6}>
            <Stack>
              <Badge>Title</Badge>
              <span>{movieDetails.title}</span>
            </Stack>
            <Stack>
              <Badge>Overview</Badge>
              <span>{movieDetails.overview}</span>
            </Stack>
            <Stack>
              <Badge>Rating</Badge>
              <span>{movieDetails.vote_average}</span>
            </Stack>
            <Stack gap={2}>
              <Badge>Genres</Badge>
              <Stack direction={"row"} gap={3}>
                {movieDetails.genres.map(g => <Badge key={g.id}>{g.name}</Badge>)}
              </Stack>
            </Stack>
            {user && <Button variant="primary" disabled={!!movieInFavourites} onClick={() => onAddToFavouritesClick()}>{movieInFavourites ? "Already in favourites" : "Add to favourites"}</Button>}
          </Stack>
        </Stack>
      </div>
    </>
  )
}

export default MoviePage