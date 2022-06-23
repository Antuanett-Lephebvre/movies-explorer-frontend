import React from 'react';
import formValidator from '../../utils/Validator';
const Signin = () => {
  const { values, isValid, handleChange, errors } = formValidator({
    email: '',
    password: '',
    name: '',
  });
  return (
    <section className='signin'>
      <div className='signin__content'>
        <a className='signin__logo' href='/'></a>
        <h1 className='signin__title'>Добро пожаловать!</h1>
        <form className='signin__form'>
          <ul className='signin__form-input-bar'>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>Имя</p>
              <input
                className={
                  errors.name
                    ? 'signin__input-error signin__input'
                    : ' signin__input'
                }
                name='name'
                onChange={handleChange}
                value={values.name}
                type='text'
                required
              ></input>
            </li>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>E-mail</p>
              <input
                className={
                  errors.email
                    ? 'signin__input-error signin__input'
                    : ' signin__input'
                }
                name='email'
                onChange={handleChange}
                value={values.email}
                required
                type='email'
              ></input>
            </li>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>Пароль</p>
              <input
                className={
                  errors.password
                    ? 'signin__input-error signin__input'
                    : ' signin__input'
                }
                name='password'
                onChange={handleChange}
                value={values.password}
                required
                minLength='8'
                maxLength='35'
                type='password'
              ></input>

              <span className={!isValid ? 'signin__error ' : 'disable'}>
                {errors?.name}
                <div className='signin__error-margin'></div> {errors?.email}
                <div className='signin__error-margin'></div> {errors?.password}
              </span>
            </li>
          </ul>
          <button className='signin__btn'>Зарегистрироваться</button>
          <div className='signin__text-box'>
            <p className='signin__text'>Уже зарегистрированы?</p>
            <a className='signin__link' href='/signin'>
              Войти
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Signin;
