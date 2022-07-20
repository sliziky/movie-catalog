import { Stack, TextField } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { NonNullChain } from 'typescript';
import { MovieDetails, MovieDetailsRequest, TrendingMoviesRequest } from '../types/types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { apiClient } from '../config/config';

function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails | null>(null);
  
  React.useEffect(() => {
    const fetchMovieDetails = async() => {
      const { data } : MovieDetailsRequest = await apiClient.get(`/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
      setMovieDetails(data);
    }
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  return (
    <>
      <div style={{width: "50%", margin: "auto"}}>
        <Stack direction={"row"} gap={"10px"}>
          <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}></img>
          <Stack gap={"10px"}>
            <TextField id="title" label="Title" value={movieDetails.title} color="success" InputProps={{readOnly: true,}}/>
            <TextField id="title" label="Overview" multiline value={movieDetails.overview} InputProps={{readOnly: true,}}/>
            <TextField id="title" label="Released" value={movieDetails.release_date} InputProps={{readOnly: true,}}/>
            <TextField id="title" label="Rating" value={movieDetails.popularity} InputProps={{readOnly: true,}}/>
            <TextField id="title" label="Runtime" value={movieDetails.runtime} InputProps={{readOnly: true,}}/>
          </Stack>
        </Stack>
      </div> 
    </>
  )
}

export default MoviePage