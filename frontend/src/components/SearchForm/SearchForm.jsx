import './SearchForm.css';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import dividingLine from '../../images/dividingLine.svg';
import loopImg from '../../images/loop.svg';

export default function SearchForm({ handleSearchSubmit, handleShortFilms, shortMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  const [errorQuery, setErrorQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchSubmit(values.search) : setErrorQuery('Нужно ввести ключевое слово.');
  };

  useEffect(() => {
    setErrorQuery('')
  }, [isValid]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser.email} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${currentUser.email} - movieSearch`);
      values.search = searchValue;
      setIsValid(true);
    }
  }, [currentUser]);

  return (
    <section className="search">
      <form className="search__form" name="search" noValidate onSubmit={handleSubmit}>
        <div className='search__line'>
        <img className='search__loop-img' alt='лупа' src={loopImg}/>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <span className="search__error">{errorQuery}</span>
        </div>
        <div className='search__input-bar'>
        <button className="search__button" type="submit"></button>
        <img className='search__dividing-line' alt='линия раздела формы' src={dividingLine}/>
      <FilterCheckbox shortMovies={shortMovies} handleShortFilms={handleShortFilms} name='filter__checkbox-full'/>
      </div>
      </form>
      <FilterCheckbox shortMovies={shortMovies} handleShortFilms={handleShortFilms} name='filter__checkbox-short'/>
    </section>
  )
}
