import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

import {
  localFavorite,
} from '../services/utilities';

import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton({ testIndex, id, name }) {
  let index = '';
  let updateStorage = '';

  const handleFavorite = () => {
    localFavorite.forEach((recipe) => {
      if (recipe.id === id && recipe.name === name) {
        // console.log(recipe.id);
        index = localFavorite.indexOf(recipe);
        localFavorite.splice(index, 1);
        updateStorage = JSON.stringify(localFavorite);
        localStorage.setItem('favoriteRecipes', updateStorage);
      }
    });
    window.location.reload();
  };

  return (
    <Button
      variant="outline-secondary"
      data-testid={ `${testIndex}-horizontal-favorite-btn` }
      src={ blackHeartIcon }
      onClick={ handleFavorite }
      type="button"
    >
      <img src={ blackHeartIcon } alt="Like button" />
    </Button>
  );
}

export default FavoriteButton;

FavoriteButton.propTypes = {
  testIndex: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
