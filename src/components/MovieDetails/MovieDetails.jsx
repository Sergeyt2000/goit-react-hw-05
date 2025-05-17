import css from "./MovieDetails.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieDetails({ movieDetails }) {
  const { title, release_date, vote_average, overview, genres, backdrop_path } =
    movieDetails;
  
  return (
    <div className={css.contentWrapper}>
      <img
        className={css.posterImg}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : defaultImg
        }
        alt={title}
        width="400"
      />
      <div className={css.content}>
        <p className={css.contentTitle}>
          {title} ({release_date ? release_date.slice(0, 4) : "N/A"})
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
