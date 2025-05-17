import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../movies-api";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query") ?? "";

  const [searchQuery, setSearchQuery] = useState(queryValue);
  const [movies, setMovies] = useState(null);
  
  
  useEffect(() => {    
    if (!queryValue) return;
    async function fetchMovies() {
      setMovies(null);
      setSearchQuery('');
      try {
        const movieData = await fetchMovieSearch(queryValue);
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [queryValue]);

  const handleChange = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const handleSearchMovie = (query) => {
    setSearchParams(query);
  };
  
  // console.log("Movies:", movies);
  return (
    <div className={css.container}>
      <SearchForm
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        query={searchQuery}
      />
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
