import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";


export default function MovieList({ movies }) {
  const location = useLocation();
  
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, backdrop_path }) => (
        <Link key={id} to={`/movies/${id}`} state={location}>
          <li className={css.movieItem}>
            <MovieCard title={title} backdrop_path={backdrop_path} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
