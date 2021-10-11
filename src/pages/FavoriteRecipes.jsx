import React, { useMemo, useState } from 'react';

import Header from '../components/Header';
import {
  foodsPlusDrinks,
  localFavorite,
  drinks,
  foods,
} from '../services/utilities';
import FavoriteButton from '../mini-components/FavScreenRemoveButton';
import CopyButton from '../mini-components/FavScreenCopyButton';

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
                  { recipe.area }
                  { ' - ' }
                  { recipe.category }
                  { ' ' }
                  { recipe.alcoholicOrNot }
                </h4>
                <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                <CopyButton recipe={ recipe } index={ index } />
                <FavoriteButton
                  testIndex={ index }
                  id={ recipe.id }
                  name={ recipe.name }
                />
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
                <CopyButton recipe={ recipe } index={ index } />
                <FavoriteButton recipe={ recipe } testIndex={ index } />
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
                <CopyButton recipe={ recipe } index={ index } />
                <FavoriteButton recipe={ recipe } testIndex={ index } />
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
        Foods
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilterButton('Drinks') }
      >
        Drinks
      </button>
      { filterByButton() }
    </div>
  );
}

export default FavoriteRecipes;
