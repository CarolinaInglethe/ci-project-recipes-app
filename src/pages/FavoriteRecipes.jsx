import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import { foodsPlusDrinks, localFavorite, drinks, foods } from '../services/utilities';
import CopyButton from '../components/CopyButton';

function FavoriteRecipes() {
  const [filterButton, setFilterButton] = useState('All');

  useMemo(() => {
    localFavorite.forEach((recipe) => {
      foodsPlusDrinks.push(recipe);

      if (recipe.type === 'bebida') {
        drinks.push(recipe);
      }

      if (recipe.type === 'comida') {
        foods.push(recipe);
      }
    });
  }, []);

  function filterByButton() {
    if (filterButton === 'All') {
      return (
        <div>
          {
            foodsPlusDrinks.map((recipe, index) => (
              <div key={ index }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  height="150px"
                />
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.category }
                </h4>
                <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                <div data-testid={ `${index}-horizontal-share-btn` }>
                  <CopyButton />
                </div>
              </div>
            ))
          }
        </div>
      );
    } if (filterButton === 'Drinks') {
      return (
        <div>
          {
            drinks.map((recipe, index) => (
              <div key={ recipe.name }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  height="150px"
                />
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.category }
                </h4>
                <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                <div data-testid={ `${index}-horizontal-share-btn` }>
                  <CopyButton />
                </div>
              </div>
            ))
          }
        </div>
      );
    } if (filterButton === 'Foods') {
      return (
        <div>
          {
            foods.map((recipe, index) => (
              <div key={ index }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  height="151px"
                />
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.category }
                </h4>
                <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                <div data-testid={ `${index}-horizontal-share-btn` }>
                  <CopyButton />
                </div>
              </div>
            ))
          }
        </div>
      );
    }
  }

  return (
    <div>
      <Header titlePage="Receitas Favoritas" />

      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilterButton('All') }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilterButton('Foods') }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilterButton('Drinks') }
      >
        drink
      </button>
      { filterByButton() }
    </div>
  );
}

export default FavoriteRecipes;
