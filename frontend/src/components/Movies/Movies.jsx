import './Movies.css';
import { useState, useContext, useEffect } from 'react';
import {
  transformMovies,
  filterMovies,
  filterShortMovies,
} from '../../utils/utils.js';
import moviesApi from '../../utils/MoviesApi.js';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

export default function Movies({ setIsLoader, setIsInfoTooltip, savedMoviesList, onLikeCard, onDeleteCard }) {
  const nowUser = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [selectionMovies, setSelectionMovies] = useState([]);
  const [NotFound, setNotFound] = useState(false);
  const [isAllMovies, setIsAllMovies] = useState([]);

  function handleSetSelectionMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setIsInfoTooltip({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено.',
      });
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setSelectionMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${nowUser.email} - movies`,
      JSON.stringify(moviesList)
    );
  }

  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${nowUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${nowUser.email} - shortMovies`, shortMovies);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi
        .getMovies()
        .then(movies => {
          setIsAllMovies(movies);
          handleSetSelectionMovies(
            transformMovies(movies),
            inputValue,
            shortMovies
          );
        })
        .catch(() =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          })
        )
        .finally(() => setIsLoader(false));
    } else {
      handleSetSelectionMovies(isAllMovies, inputValue, shortMovies);
    }
  }

  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setSelectionMovies(filterShortMovies(initialMovies));
    } else {
      setSelectionMovies(initialMovies);
    }
    localStorage.setItem(`${nowUser.email} - shortMovies`, !shortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem(`${nowUser.email} - shortMovies`) === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [nowUser]);

  useEffect(() => {
    if (localStorage.getItem(`${nowUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${nowUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${nowUser.email} - shortMovies`) === 'true'
      ) {
        setSelectionMovies(filterShortMovies(movies));
      } else {
        setSelectionMovies(movies);
      }
    }
  }, [nowUser]);

  return (
    <main className="movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleShortFilms={handleShortFilms}
        shortMovies={shortMovies}
      />
      {!NotFound && (
        <MoviesCardList
          moviesList={selectionMovies}
          savedMoviesList={savedMoviesList}
          onLikeCard={onLikeCard}
          onDeleteCard={onDeleteCard}
        />
      )}
    </main>
  );
}
