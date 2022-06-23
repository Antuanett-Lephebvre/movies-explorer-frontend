import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

const MoviesCardList = ({ savedMoviesMargin, cards, btnCondishion }) => {
    return (
        <section className={`movies ${savedMoviesMargin}`}>
      <form className='movies__search-from'>
      <SearchForm />
      </form>
      <div className='movies__card'>
      {cards.map((card) => (
          <MoviesCard card={card} />
        ))}
      </div>
      <button className={`movies__button ${btnCondishion}`}>Ещё</button>
    </section>
    )
}

export default MoviesCardList;