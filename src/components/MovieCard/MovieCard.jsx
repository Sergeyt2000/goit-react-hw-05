import css from "./MovieCard.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCard({ title, backdrop_path }) {
  return (
    <>
      <img
        className={css.movieImage}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : defaultImg
        }
        alt={title}
        width="400"
      ></img>
      <div className={css.title}>{title}</div>
    </>
  );
}
