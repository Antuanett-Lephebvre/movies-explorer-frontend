import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import logo from '../../images/logo.svg';

function Header({ loggedIn, onClickBurger, isBurgerOpen }) {
  const location = useLocation();

  return (
    <header
      className={`header header_theme_${
        location.pathname === '/' ? 'bright' : 'dark'
      }`}
    >
      <div className="header__container">
        <Link to='/' className='header__link'>
          <img src={logo} alt="Логотип" />
        </Link>
        <Navigation
          loggedIn={loggedIn}
          onClickBurger={onClickBurger}
          isBurgerOpen={isBurgerOpen}
        />
      </div>
    </header>
  );
}

export default Header;
