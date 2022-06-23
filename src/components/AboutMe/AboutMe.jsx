import React from 'react';
import studentImg from '../../images/student.png';
const AboutMe = () => {
  return (
    <section className='student' id='student'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__content'>
        <div className='student__info'>
          <div className='student__text-box'>
            <h3 className='student__subtitle'>Екатерина</h3>
            <h4 className='student__semi-title'>
              Фронтенд-разработчик, 20 лет
            </h4>
            <p className='student__text'>
            Студент по специальности “Автоматизация технологических процессов и производств”, выпускник Яндекс.Практикума по направлению “Веб-разработки”.
Работаю маркетологом, в прошлом - региональный координатор образовательных программ.
Люблю театр, рисую, умею делать коктейли:)
            </p>
            <ul className='student__link-bar'>
              <li className='student__link-bar-point'>
                <a
                  className='student__link'
                  href='https://t.me/EkaterinaMChe'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <p className='student__link-text'>Telegram</p>
                </a>
              </li>
              <li className='student__link-bar-point'>
                <a
                  className='student__link'
                  href='https://github.com/Antuanett-Lephebvre'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <p className='student__link-text'> Github</p>
                </a>
              </li>
            </ul>
          </div>
          <img
            className='student__img'
            alt='Портрет студента'
            src={`${studentImg}`}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
