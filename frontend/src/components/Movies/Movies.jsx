import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../constants/cards';

const Movies = () => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <Navigation activeLinkMovies={'menu__active-link'} />
      <MoviesCardList cards={cards} />
      <Footer />
    </>
  );
};
export default Movies;
