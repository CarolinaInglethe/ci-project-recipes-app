import React, { useContext } from 'react';
import RecipesAppContext from '../context/RecipesAppContext';

function DrinkCards() {
  const maxCardsLenght = 12;
  const [filteredDrinks, setFilteredDrinks] = useContext(RecipesAppContext);

  if (filteredDrinks.lenght > 1) {
    return (setFilteredDrinks(filteredDrinks));
  }

  return (
    <div>
      {filteredDrinks.map((drink, index) => (
        (index < maxCardsLenght) && (
          <div key={ index }>
            <div>
              <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
            </div>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ drink.strMealThumb }
                alt={ drink.strMeal }
                data-testid={ `${index}-card-img` }
              />
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default DrinkCards;
