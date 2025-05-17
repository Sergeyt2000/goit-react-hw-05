import css from "./SearchForm.module.css";

export default function SearchForm({ handleSearchMovie, searchQuery, handleChange }) {
  const onHandleChange = (event) => {
    handleChange(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    handleSearchMovie({ query: event.target.elements.query.value.trim() });
  };
  return (
    <form onSubmit={handleSearch} className={css.searchForm}>
      <input
        className={css.searchInput}
        type="text"
        name="query"
        onChange={onHandleChange}
        value={searchQuery}
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
}
