import React from 'react';
import { Link } from 'react-router-dom';

import DrinkLogo from '../images/drinkIcon.svg';
import ExploreLogo from '../images/exploreIcon.svg';
import FoodLogo from '../images/mealIcon.svg';
import './Footer.css';


class Footer extends React.Component {
  render () {

    return (
      <footer>
        <div data-testid="footer" className="footer">
          <button type="button" data-testid="drinks-bottom-btn">
            <img src={ DrinkLogo } alt="drinks_logo" />
            <Link to="/drinks"></Link>
          </button>
          <button type="button" data-testid="explore-bottom-btn">
            <img src ={ ExploreLogo } alt="explore_logo" />
            <Link to="/explore"></Link>
          </button>
          <button type="button" data-testid="food-bottom-btn">
            <img src={ FoodLogo } alt="food_logo" />
            <Link to="/food"></Link>
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
