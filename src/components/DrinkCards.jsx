import React, { useState } from 'react';
import { Redirect } from 'react-router';
// import Drink from '../pages/Drink';

function DrinkCards() {
  const maxCardsLenght = 12;
  const [filteredDrinks] = useState([]);
  const { idDrink, strDrinkThumb, strDrink } = filteredDrinks;

  if (filteredDrinks === null || filteredDrinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }
  if (filteredDrinks === 1) {
    return (
      <Redirect to={ `/bebidas/${filteredDrinks.idDrink}` } />
    );
  }

  return (
    <div>
      {filteredDrinks.map((drink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
          <img
            src={ strDrinkThumb }
            alt={ strDrink }
            data-testid={ `${index}-card-img` }
          />
          <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
        </div>
      )).slice(0, maxCardsLenght)}
    </div>
  );
}

export default DrinkCards;
