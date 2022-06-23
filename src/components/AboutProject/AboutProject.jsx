import React from 'react';
const AboutProject = () => {
  return (
    <section className='project' id='project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__text-box'>
        <div className='project__text-box-point'>
          <h3 className='project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__text-box-point'>
          <h3 className='project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__timelapse'>
        <div className='project__timelapse-table project__timelapse-table-column-left'>
          <div className='project__timelapse-text-box project__timelapse-text-box-left'>
            <p className='project__timelaps-text'>1 неделя</p>
          </div>
          <div className='project__timelapse-text-box '>
            <p className='project__timelaps-text-en'>Back-end</p>
          </div>
        </div>
        <div className='project__timelapse-table project__timelapse-table-column-right'>
          <div className='project__timelapse-text-box project__timelapse-text-box-right'>
            <p className='project__timelaps-text'>4 недели</p>
          </div>
          <div className='project__timelapse-text-box '>
            <p className='project__timelaps-text-en'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutProject;
