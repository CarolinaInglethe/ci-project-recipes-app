import React, { useContext } from 'react';

import { Card } from 'react-bootstrap';

import RecipesAppContext from '../context/RecipesAppContext';

function DrinkCards() {
  const maxCardsLength = 12;
  const { filteredDrinks } = useContext(RecipesAppContext);

  return (
    <div>
      {filteredDrinks.map((drink, index) => (
        (index < maxCardsLength) && (
          <Card key={ index }>
            <Card.Body>
              <Card.Title
                data-testid={ `${index}-card-name` }
              >
                { drink.strDrink }
              </Card.Title>
            </Card.Body>
            <Card.Header data-testid={ `${index}-recipe-card` }>
              <Card.Img
                variant="top"
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                data-testid={ `${index}-card-img` }
                width="100px"
              />
            </Card.Header>
          </Card>
        )
      ))}
    </div>
  );
}

export default DrinkCards;
