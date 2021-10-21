import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import CopyButton from '../components/CopyButton';
import FavoriteButton from '../components/DrinkFavoriteButton';

function DrinkInProgress() {
  const [drinkProgress, setDrinkProgress] = useState([]);
  const { id } = useParams();

  // Fetch para detalhes de uma receita
  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await response.json();

      setDrinkProgress(drinks);
    };
    fetchDrinks();
  }, [id]);

  if (!drinkProgress.length) {
    return <h2>Loading Recipe Progress...</h2>;
  }

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  // Renderizando os ingredientes com o método includes
  if (drinkProgress) {
    Object.keys(drinkProgress[0])
      .forEach((key) => {
        if (key.includes('strIngredient') && drinkProgress[0][key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = drinkProgress[0][`strMeasure${ingredientNumber}`];
          values.push(drinkProgress[0][key]);
          measures.push(measure);
        }
      });
  }

  return (
    <div className="details-container page-main">
      <img
        src={ drinkProgress[0].strDrinkThumb }
        alt={ `Imagem de ${drinkProgress[0].strDrink}` }
        height="400px"
        data-testid="recipe-photo"
      />
      <div>
        <h3 data-testid="recipe-title">{ drinkProgress[0].strDrink }</h3>

        <div className="buttons-container">
          <CopyButton />
          <FavoriteButton />
        </div>
      </div>
      <h5 data-testid="recipe-category">{ drinkProgress[0].strAlcoholic }</h5>

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
                    <label htmlFor={ ingredient }>
                      <input
                        type="checkbox"
                        name={ ingredient }
                        id={ ingredient }
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
        <p data-testid="instructions">{ drinkProgress[0].strInstructions }</p>
      </div>

      <Link to="/receitas-feitas">
        <Button
          variant="primary"
          type="button"
          className="details-button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Tarefa
        </Button>
      </Link>

    </div>
  );
}
export default DrinkInProgress;
