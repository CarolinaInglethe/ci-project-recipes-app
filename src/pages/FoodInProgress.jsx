import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import CopyButton from '../components/CopyButton';
import FavoriteButton from '../components/FoodFavoriteButton';

import './RecipeDetails.css';

function FoodInProgress() {
  const [FoodProgress, setFoodProgress] = useState([]);
  const { id } = useParams();

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  // Fetch para determinada receita
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await response.json();
      setFoodProgress(meals);
      // saveLocalStorage();
    };
    fetchMeal();
  }, [id]);

  if (!FoodProgress.length) {
    return <h2>Loading Recipe Progress...</h2>;
  }

  // Renderizando os ingredientes com o método includes
  if (FoodProgress) {
    Object.keys(FoodProgress[0])
      .forEach((key) => {
        if (key.includes('strIngredient') && FoodProgress[0][key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = FoodProgress[0][`strMeasure${ingredientNumber}`];
          values.push(FoodProgress[0][key]);
          measures.push(measure);
        }
      });
  }

  return (
    <div className="details-container page-main">
      <img
        src={ FoodProgress[0].strMealThumb }
        alt={ `Imagem de ${FoodProgress[0].strMeal}` }
        height="400px"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{ FoodProgress[0].strMeal }</h3>
      <div className="buttons-container">
        <CopyButton />
        <FavoriteButton />
      </div>
      <h5 data-testid="recipe-category">{ FoodProgress[0].strCategory }</h5>

      <div className="details-ingredients">
        <h4>Ingredients</h4>
        <ul>
          {
            values.map((ingredient, index) => {
              if (ingredient !== '' && ingredient !== null) {
                return (
                  <div
                    key={ index }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    <label htmlFor={ index }>
                      <input
                        type="checkbox"
                        name={ ingredient }
                        id={ index }
                        defaultChecked
                        onClick={ ({ target }) => !target.checked }
                      />
                      { ingredient }
                      { ' - ' }
                      { measures[index] }
                    </label>
                  </div>);
              }
              return null; // Pro lint não reclamar :(
            })
          }
        </ul>
      </div>

      <div className="details-instruction">
        <h4>Instructions</h4>
        <p data-testid="instructions">{ FoodProgress[0].strInstructions }</p>
      </div>

      <Link to="/receitas-feitas">
        <Button
          type="button"
          className="details-button"
          variant="primary"
          data-testid="finish-recipe-btn"
        >
          Finalizar Tarefa
        </Button>
      </Link>
    </div>
  );
}

export default FoodInProgress;
