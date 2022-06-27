import React from "react";
import portfolioArrow from "../../images/arrow.svg";
import iconArrow from "../../images/arrow-icon.svg"
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__link-bar">
        <li className="portfolio__link-bar-point">
          <a
            className="portfolio__link"
            href="https://github.com/Antuanett-Lephebvre/how-to-learn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-img"
              alt="переход"
              src={`${portfolioArrow}`}
            />
            <img
            className="arro-icon"
            alt="иконка со стрелкой перехода"
            src={`${iconArrow}`}
            />
          </a>
        </li>
        <li className="portfolio__link-bar-point">
          <a
            className="portfolio__link"
            href="https://github.com/Antuanett-Lephebvre/russian-travel"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-img"
              alt="переход"
              src={`${portfolioArrow}`}
            />
            <img
            className="arro-icon"
            alt="иконка со стрелкой перехода"
            src={`${iconArrow}`}
            />
          </a>
        </li>
        <li className="portfolio__link-bar-point">
          <a
            className="portfolio__link"
            href="https://github.com/Antuanett-Lephebvre/react-mesto-api-full"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-img"
              alt="переход"
              src={`${portfolioArrow}`}
            />
            <img
            className="arro-icon"
            alt="иконка со стрелкой перехода"
            src={`${iconArrow}`}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
