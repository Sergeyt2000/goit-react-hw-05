import { useEffect, useState, useRef } from "react";
import { useParams, useLocation, Outlet, NavLink, Link } from "react-router-dom";
import { fetchMoviesById } from "../movies-api";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  // console.log("backLinkRef", backLinkRef);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieDetails(id) {
      try {
        const movieData = await fetchMoviesById(id);
        setMovieDetails(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);
  // console.log(movieDetails);

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current || "/movies"}>
        <button type="button" className={css.button}>
          Go back
        </button>
      </Link>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <div className={css.info}>
        <NavLink to={`/movies/${movieId}/cast`} className={activeLinkClass}>
          Cast
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className={activeLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
