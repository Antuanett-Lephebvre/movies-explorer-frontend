import React from 'react';

const Tech = () => {
  return (
    <section className='technology' id='technology'>
      <h2 className='technology__title'>Технологии</h2>
      <div className='technology__content'>
        <h3 className='technology__subtitle'>7 технологий</h3>
        <p className='technology__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='technology__link-bar'>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://doka.guide/html/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> HTML</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://doka.guide/css/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> CSS</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://doka.guide/js/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> JS</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://reactjs.org/docs/getting-started.html'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> React</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://git-scm.com/doc'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> Git</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://expressjs.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> Express.js</p>
            </a>
          </li>
          <li className='technology__link-bar-point'>
            <a
              className='technology__link'
              href='https://docs.mongodb.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <p className='technology__link-text'> mongoDB</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Tech;
