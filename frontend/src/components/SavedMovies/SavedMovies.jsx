import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import savedCards from '../../constants/saved-cards';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
const SavedMovies = () => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <Navigation activeLinkSavedMovies={'menu__active-link'} />
      
      <MoviesCardList
        savedMoviesMargin={'movies-saved-movies-margin'}
        cards={savedCards}
      />
      <Footer />
    </>
  );
};
export default SavedMovies;
