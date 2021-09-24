import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';

function ExploreDrink() {
  const history = useHistory();

  async function fetchRandomDrink() {
    const RANDOM_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(RANDOM_DRINK_API);
    const result = await response.json();
    history.push(`/bebidas/${result.drinks[0].idDrink}`);
  }

  return (
    <div>
      <Header titlePage="Explorar Bebidas" />
      <div>
        <p>ExploreDrink</p>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => fetchRandomDrink() }
        >
          Me Surpreenda!
        </button>
      </div>
    </div>
  );
}

export default ExploreDrink;
