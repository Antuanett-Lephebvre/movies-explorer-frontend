import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Tech from '../Tech/Tech';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
const Main = () => {
  return (
    <>
      <Header applicationBtnCondition={'disable'} />
      <Promo />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Main;
