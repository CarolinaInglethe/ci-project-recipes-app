import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';

import Footer from '../components/Footer';

function ExploreFood() {
  const history = useHistory();

  async function fetchRandomMeal() {
    const RANDOM_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(RANDOM_MEAL_API);
    const result = await response.json();
    history.push(`/comidas/${result.meals[0].idMeal}`);
  }

  return (
    <div>
      <Header titlePage="Explorar Comidas" />
      <div>
        <p>ExploreFood</p>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => fetchRandomMeal() }
        >
          Me Surpreenda!
        </button>
      </div>
      <p>ExploreFood</p>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explorar/comidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => history.push('/explorar/comidas/area') }
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => fetchRandomMeal() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreFood;
