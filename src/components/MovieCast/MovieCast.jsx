import css from './MovieCast.module.css';

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCast({ castMember }) {
  const { profile_path, name, character } = castMember;

  return (
    <div>
      <img
        className={css.castImg}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt={name}
        width="300"
      />
      <p className={css.name}>Name: {name}</p>
      <p className={css.character}>Character: {character}</p>
    </div>
  );
}
