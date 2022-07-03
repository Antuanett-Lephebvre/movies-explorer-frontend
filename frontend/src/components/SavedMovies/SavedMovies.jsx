import './SavedMovies.css';
import { useState, useContext, useEffect } from 'react';
import {
  filterMovies,
  filterShortMovies,
} from '../../utils/utils.js';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

export default function SavedMovies({ onDeleteCard, savedMoviesList, setIsInfoTooltip }) {
  const nowUser = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMoviesList);
  const [selectionMovies, setSelectionMovies] = useState(showedMovies);

  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(savedMoviesList, inputValue, shortMovies);
    if (moviesList.length === 0) {
      setNotFound(true);
      setIsInfoTooltip({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено.',
      });
    } else {
      setNotFound(false);
      setSelectionMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem(`${nowUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(selectionMovies));
      filterShortMovies(selectionMovies).length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
      setShortMovies(false);
      localStorage.setItem(`${nowUser.email} - shortSavedMovies`, false);
      selectionMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShowedMovies(selectionMovies);
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`${nowUser.email} - shortSavedMovies`) === 'true') {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setShortMovies(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, nowUser]);

  useEffect(() => {
    setSelectionMovies(savedMoviesList);
    savedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
  }, [savedMoviesList]);

  return (
    <main className="saved-movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleShortFilms={handleShortFilms}
        shortMovies={shortMovies}
      />
      {!NotFound && (
        <MoviesCardList
          moviesList={showedMovies}
          savedMoviesList={savedMoviesList}
          onDeleteCard={onDeleteCard}
        />
      )}
    </main>
  );
}
