import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Header from '../components/Header';
import {
  foodsPlusDrinks,
  localFavorite,
  drinks,
  foods,
} from '../services/utilities';
import FavoriteButton from '../mini-components/FavScreenRemoveButton';
import CopyButton from '../mini-components/FavScreenCopyButton';

import './RecipeDetails.css';

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
        <div className="details-container">
          {
            foodsPlusDrinks.map((recipe, index) => (
              <div key={ index }>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                    height="150px"
                  />
                </Link>
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.area }
                  { ' - ' }
                  { recipe.category }
                  { ' ' }
                  { recipe.alcoholicOrNot }
                </h4>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                </Link>
                <div className="buttons-container">
                  <CopyButton recipe={ recipe } index={ index } />
                  <FavoriteButton
                    testIndex={ index }
                    id={ recipe.id }
                    name={ recipe.name }
                  />
                </div>
              </div>
            ))
          }
        </div>
      );
    } if (filterButton === 'Drinks') {
      return (
        <div className="details-container">
          {
            drinks.map((recipe, index) => (
              <div key={ recipe.name }>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                    height="150px"
                  />
                </Link>
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.category }
                </h4>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                </Link>
                <div className="buttons-container">
                  <CopyButton recipe={ recipe } index={ index } />
                  <FavoriteButton recipe={ recipe } testIndex={ index } />
                </div>
              </div>
            ))
          }
        </div>
      );
    } if (filterButton === 'Foods') {
      return (
        <div className="details-container">
          {
            foods.map((recipe, index) => (
              <div key={ index }>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                    height="151px"
                  />
                </Link>
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.category }
                </h4>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
                </Link>
                <div className="buttons-container">
                  <CopyButton recipe={ recipe } index={ index } />
                  <FavoriteButton recipe={ recipe } testIndex={ index } />
                </div>
              </div>
            ))
          }
        </div>
      );
    }
  }

  return (
    <div className="favorite-container">
      <Header titlePage="Receitas Favoritas" />
      <div className="fav-filterbuttons">
        <Button
          variant="secondary"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilterButton('All') }
        >
          All
        </Button>

        <Button
          variant="secondary"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilterButton('Foods') }
        >
          Foods
        </Button>

        <Button
          variant="secondary"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilterButton('Drinks') }
        >
          Drinks
        </Button>
      </div>
      { filterByButton() }
    </div>
  );
}

export default FavoriteRecipes;
