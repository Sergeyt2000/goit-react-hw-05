import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchTrendMovies } from "../movies-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTrendMovies();       
        setMoviesData(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchData();
  }, []);
  // console.log(moviesData);
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={moviesData} />
    </div>
  );
}
