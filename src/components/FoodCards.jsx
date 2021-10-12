import React, { useContext } from 'react';

import { Card } from 'react-bootstrap';

import RecipesAppContext from '../context/RecipesAppContext';

function FoodCards() {
  const maxCardsLength = 12;
  const { filteredFoods } = useContext(RecipesAppContext);

  return (
    <div className="bottom-space">
      {filteredFoods.map((meal, index) => (
        (index < maxCardsLength) && (
          <Card key={ index } style={ { width: '18rem' } }>
            <Card.Body>
              <Card.Title
                data-testid={ `${index}-card-name` }
              >
                { meal.strMeal }
              </Card.Title>
            </Card.Body>
            <Card.Header data-testid={ `${index}-recipe-card` }>
              <Card.Img
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
                data-testid={ `${index}-card-img` }
                width="100px"
                variant="top"
              />
            </Card.Header>
          </Card>
        )
      ))}
    </div>
  );
}

export default FoodCards;
