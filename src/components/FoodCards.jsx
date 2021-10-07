import React, { useContext } from 'react';
import RecipesAppContext from '../context/RecipesAppContext';

function FoodCards() {
  const maxCardsLength = 12;
  const { filteredFoods } = useContext(RecipesAppContext);

  return (
    <div>
      {filteredFoods.map((meal, index) => (
        (index < maxCardsLength) && (
          <div key={ index }>
            <div>
              <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
            </div>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
                data-testid={ `${index}-card-img` }
                width="100px"
              />
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default FoodCards;
