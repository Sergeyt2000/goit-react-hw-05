import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="serchInput">Find contacts by name</label>
      <input
        type="text"
        id="serchInput"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}
