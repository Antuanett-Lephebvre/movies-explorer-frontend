import React from 'react';

const MoviesCard = ({ card }) => {
  return (
    
    <div className={`card ${card.markerClass}`}>
      <div className='card__container'>
        <div className='card__content'>
          <h2 className='card__title'>{card.title}</h2>
          <span className='card__timeline'>{card.time}</span>
        </div>
        <div className='card__title-heart-box'>
          <button className={`card__movies-button ${card.btn}`}></button>
        </div>
        </div>
      <img className='card__img' alt='фильм' src={card.link} />
    </div>
  );
};
export default MoviesCard;
