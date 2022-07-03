import './Profile.css';
import { useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';

export default function Profile({ handleSignOut, handleProfile }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const nowUser = useContext(CurrentUserContext);
  function handleSubmit(e) {
    e.preventDefault();
    handleProfile(values);
  }

  useEffect(() => {
    if (nowUser) {
      resetForm(nowUser, {}, true);
    }
  }, [nowUser, resetForm]);

  const requirementValidity = (!isValid || (nowUser.name === values.name && nowUser.email === values.email));

  return (
    <main className="profile">
      <form className="profile__form" name="profile" noValidate onSubmit={handleSubmit}>
        <h1 className="profile__title">{`Привет, ${nowUser.name || ''}!`}</h1>
        <div className="profile__labels-container">
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              name="name"
              className={`profile__input ${errors.name && 'profile__input_error'}`}
              onChange={handleChange}
              value={values.name || ''}
              type="text"
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            />
            <span className="profile__error-name">{errors.name || ''}</span>
          </label>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              name="email"
              className={`profile__input ${errors.email && 'profile__input_error'}`}
              onChange={handleChange}
              value={values.email || ''}
              type="email"
              required
            />
            <span className="profile__error">{errors.email || ''}</span>
          </label>
        </div>
        <div className="profile__button-container">
          <button
            type="submit"
            className={`profile__button-edit ${requirementValidity ? 'profile__button-edit_disabled' : ''}`}
            disabled={requirementValidity ? true : false}
          >
            Редактировать
          </button>
          <button type="submit" className="profile__button-exit" onClick={handleSignOut}>
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
}
