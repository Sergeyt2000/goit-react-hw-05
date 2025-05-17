import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../movies-api";
import css from "./MovieReviewsPage.module.css";
import MovieReviews from "../components/MovieReviews/MovieReviews";

export default function MovieReviewsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieDetails(id) {
      try {
        const movieData = await fetchMovieReviews(id);
        setMovieDetails(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);
  console.log(movieDetails);

  return (
    <div className={css.reviewsContainer}>
      {!movieDetails ? (
        <p>Loading...</p>
      ) : movieDetails.results && movieDetails.results.length > 0 ? (
        <ul className={css.reviewsList}>
          {movieDetails.results.map((movie) => (
            <li className={css.reviewsItem} key={movie.id}>
              <MovieReviews movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
            <p className={css.noReviewsText}>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
}
