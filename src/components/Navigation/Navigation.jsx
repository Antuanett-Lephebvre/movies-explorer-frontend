import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({
  activeLinkMovies,
  activeLinkSavedMovies,
  activeLinkProfile,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpenBtnClick = () => {
    setIsMenuOpen(true);
  };
  const handleMenuCloseBtnClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <button
        type='button'
        onClick={handleMenuOpenBtnClick}
        className='menu__btn-open'
      ></button>
      <nav className={`menu ${isMenuOpen ? '' : 'disable'}`}>
        <div className='menu__background'></div>
        <button
          type='button'
          onClick={handleMenuCloseBtnClick}
          className='menu__exit-btn'
        ></button>
        <ul className={`menu__link-bar ${isMenuOpen ? '' : 'disable'}`}>
          <li className='menu__piont menu__piont-main'>
            <NavLink className='menu__link' to='/'>
              Главная
            </NavLink>
          </li>
          <li className={`menu__piont ${activeLinkMovies}`}>
            <NavLink className='menu__link' to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className={`menu__piont ${activeLinkSavedMovies}`}>
            <NavLink className='menu__link' to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
          <li
            className={`menu__piont menu__piont-profile ${activeLinkProfile}`}
          >
            <NavLink className='menu__link menu__lin-profile' to='/profile'>
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
