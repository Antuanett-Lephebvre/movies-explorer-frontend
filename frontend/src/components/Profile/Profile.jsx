import React from 'react';
import Header from '../Header/Header';
const Profile = () => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий</h1>
        <form className='profile__form'>
          <ul className='profile__input-bar'>
            <li className='profile__input-bar-point'>
              <p className='profile__hint'>Имя</p>
              <input
                className='profile__input'
                placeholder='Ваше имя'
                defaultValue={'Виталий'}
              ></input>
            </li>
            <li className='profile__input-bar-point'>
              <p className='profile__hint'>E-mail</p>
              <input
                className='profile__input'
                defaultValue={'pochta@yandex.ru'}
              ></input>
            </li>
          </ul>
          <div className='profile__btn-box'>
            <button type='submit' className='profile__button'>
              Редактировать
            </button>
            <a
              type='button'
              className='profile__button profile__button_type_exit'
              href='/'
            >
              <p className='profile__button_type_exit-text'>
                Выйти из аккаунта
              </p>
            </a>
          </div>
        </form>
      </section>
    </>
  );
};
export default Profile;
