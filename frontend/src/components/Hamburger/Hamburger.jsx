import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

export default function Hamburger({ isBurgerOpen, onClickBurger }) {

  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  function handleOnClickBurger() {
    onClickBurger();
  };

  useEffect(() => {
    if (!isMobile && isBurgerOpen) {
      onClickBurger();
    }
  }, [isBurgerOpen, isMobile, onClickBurger]);

  return (
    <button
      type="button"
      className={`hamburger-button hamburger-button_${
        isBurgerOpen ? 'on' : 'off'
      }`}
      onClick={handleOnClickBurger}
    >
      <span></span>
    </button>
  );
}
