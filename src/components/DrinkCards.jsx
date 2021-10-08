import React, { useContext } from 'react';
import RecipesAppContext from '../context/RecipesAppContext';

function DrinkCards() {
  const maxCardsLength = 12;
  const { filteredDrinks } = useContext(RecipesAppContext);

  return (
    <div>
      {filteredDrinks.map((drink, index) => (
        (index < maxCardsLength) && (
          <div key={ index }>
            <div>
              <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
            </div>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
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

export default DrinkCards;
