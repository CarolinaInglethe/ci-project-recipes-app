import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './RecipeDetails.css';
import FetchDrinkDetails from '../components/FetchDrinkDetails';
import DrinkDetailsImage from '../components/DrinkDetailsImage';
import CopyButton from '../components/CopyButton';
import DrinkCategory from '../components/DrinkCategory';
import FavoriteButton from '../components/FavoriteButton';

function DrinkDetails() {
  const { id } = useParams();

  return (
    <div>
      <DrinkDetailsImage />
      <div>
        <CopyButton />
        <FavoriteButton />
      </div>
      <DrinkCategory />
      <FetchDrinkDetails />
      <Link
        to={ `/bebidas/${id}/in-progress` }
        data-testid="start-recipe-btn"
        className="button"
      >
        Iniciar Receita
      </Link>
    </div>
  );
}

export default DrinkDetails;
