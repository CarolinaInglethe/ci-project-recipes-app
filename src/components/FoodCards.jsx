import React, { useContext } from 'react';
import RecipesAppContext from '../context/RecipesAppContext';

function FoodCards() {
  const maxCardsLenght = 12;
  const { filteredFoods, setFilteredFoods } = useContext(RecipesAppContext);

  if (filteredFoods.lenght > 1) {
    return (setFilteredFoods(state));
  }

  return (
    <div>
      {filteredFoods.map((meal, index) => (
        (index < maxCardsLenght) && (
          <div key={ index }>
            <div>
              <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
            </div>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
                data-testid={ `${index}-card-img` }
              />
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default FoodCards;
