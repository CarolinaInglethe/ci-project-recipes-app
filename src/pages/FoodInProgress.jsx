import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import FavoriteIcon from '../images/whiteHeartIcon.svg';

function FoodInProgress() {
  const [FoodProgress, setFoodProgress] = useState([]);
  const { id } = useParams();

  // Fetch para determinada receita
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await response.json();

      setFoodProgress(meals);
    };
    fetchMeal();
  }, [id]);

  if (!FoodProgress.length) {
    return <h2>Loading Recipe Progress...</h2>;
  }

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

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
    <div>
      <p>Food In Progress</p>
      <img
        src={ FoodProgress[0].strMealThumb }
        alt={ `Imagem de ${FoodProgress[0].strMeal}` }
        height="250px"
        data-testid="recipe-photo"
      />
      <div>
        <h3 data-testid="recipe-title">{ FoodProgress[0].strMeal }</h3>

        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="botao compartilhar" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ FavoriteIcon } alt="Botao Favoritar" />
        </button>
      </div>
      <h5 data-testid="recipe-category">{ FoodProgress[0].strCategory }</h5>

      <div>
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
                    <label htmlFor={ ingredient }>
                      <input type="checkbox" name={ ingredient } id={ ingredient } />
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

      <div>
        <h4>Instructions</h4>
        <p data-testid="instructions">{ FoodProgress[0].strInstructions }</p>
      </div>

      <button type="button" data-testid="finish-recipe-btn">Finalizar Tarefa</button>

    </div>
  );
}
export default FoodInProgress;
