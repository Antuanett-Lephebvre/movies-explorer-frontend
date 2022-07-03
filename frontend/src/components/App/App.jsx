import './App.css';
import mainApi from '../../utils/MainApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import useEscapePress from '../../hooks/useEscapePress.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [nowUser, setNowUser] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
  const footerEndpoints = ['/movies', '/saved-movies', '/'];

  function onClickBurger() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  useEscapePress(onClickBurger, isBurgerOpen);

  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  function goBack() {
    history.goBack();
  }

  function handleRegistration({ name, email, password }) {
    setIsLoader(true);
    mainApi
      .createProfile(name, email, password)
      .then(data => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi
      .login(email, password)
      .then(jwt => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true);
          history.push('/movies');
          setIsInfoTooltip({
            isOpen: true,
            successful: true,
            text: 'Добро пожаловать!',
          });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleSignOut() {
    setNowUser({});
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  function handleProfile({ name, email }) {
    setIsLoader(true);
    mainApi
      .updateProfile(name, email)
      .then(newUserData => {
        setNowUser(newUserData);
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          text: 'Ваши данные обновлены!',
        });
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function saveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  function deleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true);
            setNowUser(data);
            history.push(path);
          }
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => {
          setIsLoader(false);
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(res => setNowUser(res))
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && nowUser) {
      mainApi
        .getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner === nowUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        );
    }
  }, [nowUser, loggedIn]);

  return (
    <div className="app">
      {!load ? (
        <Preloader isOpen={isLoader} />
      ) : (
        <CurrentUserContext.Provider value={nowUser}>
          <Route exact path={headerEndpoints}>
            <Header
              loggedIn={loggedIn}
              onClickBurger={onClickBurger}
              isBurgerOpen={isBurgerOpen}
            />
          </Route>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/signup'>
              {!loggedIn ? (
                <Register handleRegistration={handleRegistration} />
              ) : (
                <Redirect to='/' />
              )}
            </Route>
            <Route exact path='/signin'>
              {!loggedIn ? (
                <Login handleLogin={handleLogin} />
              ) : (
                <Redirect to='/' />
              )}
            </Route>
            <ProtectedRoute
              path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              setIsLoader={setIsLoader}
              setIsInfoTooltip={setIsInfoTooltip}
              savedMoviesList={savedMoviesList}
              onLikeCard={saveMovie}
              onDeleteCard={deleteMovie}
            />
            <ProtectedRoute
              path='/saved-movies'
              component={SavedMovies}
              loggedIn={loggedIn}
              savedMoviesList={savedMoviesList}
              onDeleteCard={deleteMovie}
              setIsInfoTooltip={setIsInfoTooltip}
            />
            <ProtectedRoute
              path='/profile'
              component={Profile}
              loggedIn={loggedIn}
              handleProfile={handleProfile}
              handleSignOut={handleSignOut}
            />
            <Route path='*'>
              <NotFound goBack={goBack} />
            </Route>
          </Switch>
          <Route exact path={footerEndpoints}>
            <Footer />
          </Route>
          <Preloader isOpen={isLoader} />
          <InfoTooltip
            status={isInfoTooltip}
            onClose={closeInfoTooltip}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}
