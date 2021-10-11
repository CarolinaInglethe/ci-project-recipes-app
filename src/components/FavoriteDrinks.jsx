import React, { useMemo } from 'react';

import { localFavorite, drinks } from '../services/utilities';
import CopyButton from './CopyButton';

function FavoriteDrinks() {
  useMemo(() => {
    localFavorite.forEach((recipe) => {
      if (recipe.type === 'bebida') {
        drinks.push(recipe);
      }
    });
  }, []);

  return (
    <div>
      {
        drinks.map((recipe, index) => (
          <div key={ index }>
            <img
              src={ recipe.image }
              alt={ recipe.name }
              data-testid={ `${index}-horizontal-image` }
              height="150px"
            />
            <h4 data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</h4>
            <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
            <div data-testid={ `${index}-horizontal-share-btn` }>
              <CopyButton />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default FavoriteDrinks;
