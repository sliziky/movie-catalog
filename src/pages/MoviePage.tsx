import { Stack, TextField } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { NonNullChain } from 'typescript';
import { MovieDetails, MovieDetailsRequest, TrendingMoviesRequest } from '../types/types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { apiClient } from '../config/config';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Stack>
      </div> 
    </>
  )
}

export default MoviePage