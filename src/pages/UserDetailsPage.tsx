import { Accordion, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom, userFavouriteMoviesAtom } from "../recoil/atoms";
import { Trash3 } from "react-bootstrap-icons";
import { Movie } from "../types/types";
import styles from "./UserDetailsPage.module.scss";

function UserDetailsPage() {
  const [favouriteMovies, setFavouriteMovies] = useRecoilState(
    userFavouriteMoviesAtom
  );
  const user = useRecoilValue(userAtom);

  const onRemoveMovie = (movie: Movie) => {
    const fav: Movie[] = [...favouriteMovies];
    const indexOfMovie = fav.findIndex((m) => m.id === movie.id);
    fav.splice(indexOfMovie, 1);
    setFavouriteMovies(fav);
    localStorage.setItem("userFavouriteMovies", JSON.stringify(fav));
  };
  if (!user) {
    return <span>You are not LOGGED IN</span>;
  }
  return (
    <div className={styles.userDetailsPage}>
      <h3>
        <Badge bg="secondary">Your favourite movies</Badge>
      </h3>
      <Accordion defaultActiveKey={""}>
        {favouriteMovies.map((movie, index) => (
          <Accordion.Item eventKey={index.toString()} key={movie.id}>
            <Accordion.Header>
              <span>{movie.title}</span>
            </Accordion.Header>
            <Accordion.Body>
              {movie.overview}
              <Link to={`/movie/${movie.id}`}>Show more here</Link>
              <Trash3
                className={styles.deleteIcon}
                onClick={() => onRemoveMovie(movie)}
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default UserDetailsPage;
