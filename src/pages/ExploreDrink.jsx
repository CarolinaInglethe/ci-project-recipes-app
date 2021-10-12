import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, ButtonGroup } from 'react-bootstrap';

import Header from '../components/Header';

import Footer from '../components/Footer';

import './ExploreRecipes.css';

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
      <div className="recipe-container">
        <ButtonGroup vertical>
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explorar/bebidas/ingredientes') }
          >
            Por Ingredientes
          </Button>
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-surprise"
            onClick={ () => fetchRandomDrink() }
          >
            Me Surpreenda!
          </Button>
        </ButtonGroup>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrink;
