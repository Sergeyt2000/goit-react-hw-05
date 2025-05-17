import css from "./NotFoundPage.module.css";
import { useState } from "react";

const errorImg = "https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png";
export default function NotFoundPage() {
  const [hasError, setHasError] = useState(false);
  return (
    <div className={css.notFP}>
      {hasError ? (
        <p className={css.notFPText}>...Page Not Found...</p>
      ) : (
        <img src={errorImg} alt="404" onError={() => setHasError(true)} />
      )}
    </div>
  );
}
