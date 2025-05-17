import css from "./MovieDetails.module.css";

export default function MovieDetails({ movieDetails }) {
  const { title, release_date, vote_average, overview, genres } = movieDetails;
  
  return (
    <div className={css.contentWrapper}>
      <img
        className={css.posterImg}
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={title}
        width="400"
      />
      <div className={css.content}>
        <p className={css.contentTitle}>
          {title} ({release_date})
        </p>
        <p className={css.score}>
          User Score: {(vote_average * 10).toFixed(1)}%
        </p>
        <p className={css.overviewText}>Overview: {overview}</p>
        <p>Genres: </p>
        <ul className={css.genresList}>
          {genres.map((genre) => (
            <li key={genre.id}>
              <p className={css.genresTitle}>{genre.name} |</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
