import './AboutMe.css';
import avatar from '../../images/student.png';

export default function AboutMe() {
  return (
    <section className="about-me" id='student'>
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__bio-container">
          <div className="about-me__bio">
            <h3 className="about-me__name">Екатерина</h3>
            <p className="about-me__age">Фронтенд-разработчик, 20 лет</p>
            <p className="about-me__text">
            Студент по специальности “Автоматизация технологических процессов и производств”, выпускник Яндекс.Практикума по направлению “Веб-разработки”.
Работаю маркетологом, в прошлом - региональный координатор образовательных программ.
Люблю театр, рисую, умею делать коктейли:)
            </p>
            <ul className="about-me__socials">
              <li>
                <a
                  href="https://t.me/EkaterinaMChe"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Antuanett-Lephebvre"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__avatar"
            src={avatar}
            alt="фотография разработчика приложения"
          />
        </div>
      </div>
    </section>
  );
}
