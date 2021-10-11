import React, { useMemo } from 'react';

import { localFavorite, foods } from '../services/utilities';
import CopyButton from './CopyButton';

function FavoriteFoods() {
  useMemo(() => {
    localFavorite.forEach((recipe) => {
      if (recipe.type === 'comida') {
        foods.push(recipe);
      }
    });
  }, []);

  return (
    <div>
      {
        foods.map((recipe, index) => (
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

export default FavoriteFoods;
