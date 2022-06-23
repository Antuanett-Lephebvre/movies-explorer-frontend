import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';

const App = () => {
  return (
    <div className='body'>
      <div className='page'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/movies'>
              <Movies />
            </Route>
            <Route exact path='/saved-movies'>
              <SavedMovies />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/signin'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Register />
            </Route>
            <Route path='' component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
