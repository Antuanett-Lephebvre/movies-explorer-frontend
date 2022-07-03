import './FilterCheckbox.css';

export default function FilterCheckbox({ shortMovies, handleShortFilms, name }) {
  return (
    <label className={`filter ${name}`}>
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={handleShortFilms}
        checked={shortMovies ? true : false}
      />
      <span className="filter__tumbler"></span>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
}
