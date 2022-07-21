import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import { apiClient } from '../config/config';
import useDebounce from '../hooks/useDebounce';
import { MovieSuggestionRequest, SearchMovieSuggestion } from '../types/types';
import styles from './Navbar.module.scss'
import { Gear, Person } from 'react-bootstrap-icons';
import { NavDropdown } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/atoms';
function NavigationBar() {

  const navigate = useNavigate();
  const [searchMovieInput, setSearchMovieInput] = React.useState("");
  const [movieSuggestions, setMovieSuggestions] = React.useState<SearchMovieSuggestion[]>([]);
  const user = useRecoilValue(userAtom);
  const searchMovieDebounced = useDebounce(searchMovieInput, 500);

  React.useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchMovieDebounced === "") { return; }
      const { data }: MovieSuggestionRequest = await apiClient.get(`/search/movie?query=${searchMovieDebounced}&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
      setMovieSuggestions(data.results.map(movie => ({ value: movie.id, label: movie.title })));
    }
    fetchSuggestions();
  }, [searchMovieDebounced]);

  return (
    <>
      <Navbar bg="dark" variant="dark" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navbarBrand} onClick={() => navigate('/')}>Movie Trends Catalog</Navbar.Brand>
          <Select className={styles.navbarSearch} placeholder="Find a movie.." onInputChange={(nv) => setSearchMovieInput(nv)} onChange={(newValue: any) => { navigate(`/movie/${newValue.value}`) }} options={movieSuggestions} />
          {user ?
            <NavDropdown title={<Person className={styles.navbarIcon} />}>
              <NavDropdown.Item onClick={() => navigate('/userDetails')}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/logout')}>Logout</NavDropdown.Item>
            </NavDropdown>
            : <NavDropdown title={<Gear className={styles.navbarIcon} />}>
              <NavDropdown.Item onClick={() => navigate('/login')}>Login</NavDropdown.Item>
            </NavDropdown>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar