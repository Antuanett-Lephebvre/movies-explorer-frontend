import React from "react";
import { useHistory } from "react-router-dom";
const Page404 = () => {
  const history = useHistory();
  return (
    <section className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__subtitle">Страница не найдена</p>
      <button className="page404__button" onClick={() => history.goBack()}>
        Назад
      </button>
    </section>
  );
};
export default Page404;
