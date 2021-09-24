import React from 'react';
import { useHistory } from 'react-router';
import DrinkLogo from '../images/drinkIcon.svg';
import ExploreLogo from '../images/exploreIcon.svg';
import FoodLogo from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();

  return (
    <footer>
      <div data-testid="footer" className="footer">
        <button
          type="button"
          onClick={ () => history.push('/bebidas') }
        >
          <img src={ DrinkLogo } alt="drinks_logo" data-testid="drinks-bottom-btn" />
        </button>
        <button
          type="button"
          onClick={ () => history.push('/explorar') }
        >
          <img src={ ExploreLogo } alt="explore_logo" data-testid="explore-bottom-btn" />
        </button>
        <button
          type="button"
          onClick={ () => history.push('/comidas') }
        >
          <img src={ FoodLogo } alt="food_logo" data-testid="food-bottom-btn" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
