import css from './MovieReviews.module.css';

export default function MovieReviews({ movie }) {
    const { author, content } = movie;
  return (
    <div>
      <p className={css.reviewsAutor}>Author: {author}</p>
      <p className={css.reviewsContent}>{content}</p>
    </div>
  );
}
