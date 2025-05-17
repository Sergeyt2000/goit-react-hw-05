import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../movies-api";
import css from "../pages/MovieCastPage.module.css";
import MovieCast from "../components/MovieCast/MovieCast";

export default function MovieCastPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieDetails(id) {
      try {
        const movieData = await fetchMovieCredits(id);
        setMovieDetails(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);
  console.log(movieDetails);

  return (
    <div className={css.castContainer}>
      {!movieDetails || !movieDetails.cast ? (
        <p>We don't have any cast for this movie.</p>
      ) : (
        <ul className={css.castList}>
          {movieDetails &&
            movieDetails.cast.map((castMember) => (
              <li className={css.castItem} key={castMember.id}>
                <MovieCast castMember={castMember} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
