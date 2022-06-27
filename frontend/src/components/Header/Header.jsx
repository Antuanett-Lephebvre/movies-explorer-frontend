import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ homePageBtnCondition, applicationBtnCondition }) => {
  return (
    <>
      <header className='header'>
        <a className='header__logo' alt='логотип' href='/'></a>
        <nav className='header__menu'>
          <ul className='header__menu-bar'>
            <li className={`header__menu-point  ${homePageBtnCondition}`}>
              <NavLink
                className='header__menu-signup-btn header__menu-btn header__menu-btn-home-page'
                to='/signup'
              >
                Регистрация
              </NavLink>
            </li>
            <li
              className={`header__menu-point header__menu-point-signin  ${homePageBtnCondition}`}
            >
              <NavLink
                className='header__menu-btn header__menu-signin-btn header__menu-btn-home-page'
                to='/signin'
              >
                <p className='header__menu-movies-btn-text'> Войти</p>
              </NavLink>
            </li>
            <li
              className={`header__menu-point ${applicationBtnCondition} header__menu-point-movies-pages`}
            >
              <NavLink
                className='header__menu-movies-btn header__menu-btn'
                to='/movies'
              >
                Фильмы
              </NavLink>
            </li>
            <li
              className={`header__menu-point  ${applicationBtnCondition} header__menu-point-movies-pages`}
            >
              <NavLink
                className='header__menu-save-movies-btn header__menu-btn'
                to='/saved-movies'
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li
              className={`header__menu-point ${applicationBtnCondition} header__menu-point-movies-pages`}
            >

              <NavLink className='header__menu-profile-btn header__menu-btn' to='/profile'>
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;