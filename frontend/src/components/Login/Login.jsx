import React from 'react';
import formValidator from '../../utils/Validator';
const Login = () => {
  const { values, isValid, handleChange, errors } = formValidator({
    email: '',
    password: '',
  });

  return (
    <section className='login'>
      <div className='login__content'>
        <a className='login__logo' href='/'></a>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <ul className='login__form-input-bar'>
            <li className='login__form-input-bar-point'>
              <p className='login__hint'>E-mail</p>
              <input
                name='email'
                type='email'
                value={values.email}
                className={
                  errors.email
                    ? 'login__input-error login__input'
                    : ' login__input'
                }
                onChange={handleChange}
                required
              ></input>
            </li>
            <li className='login__form-input-bar-point'>
              <p className='login__hint'>Пароль</p>
              <input
                value={values.password}
                className={
                  errors.password
                    ? 'login__input-error login__input'
                    : ' login__input'
                }
                onChange={handleChange}
                name='password'
                type='password'
                minLength='8'
                maxLength='35'
                required
              ></input>
              <span className={!isValid ? 'login__error' : 'disable'}>
                {errors?.email}
                <div className='login__error-margin'></div>
                {errors?.password}
              </span>
            </li>
          </ul>
          <button type='submit' className='login__btn'>
            Войти
          </button>
          <div className='login__text-box'>
            <p className='login__text'>Ещё не зарегистрированы?</p>
            <a className='login__link' href='/signup'>
              Регистрация
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
