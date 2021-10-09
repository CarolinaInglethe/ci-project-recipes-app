import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import FavoriteIcon from '../images/whiteHeartIcon.svg';

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
    <div>
      <p>Drink In Progress</p>
      <img
        src={ drinkProgress[0].strDrinkThumb }
        alt={ `Imagem de ${drinkProgress[0].strDrink}` }
        height="250px"
        data-testid="recipe-photo"
      />
      <div>
        <h3 data-testid="recipe-title">{ drinkProgress[0].strDrink }</h3>

        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="botao compartilhar" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ FavoriteIcon } alt="Botao Favoritar" />
        </button>
      </div>
      <h5 data-testid="recipe-category">{ drinkProgress[0].strAlcoholic }</h5>

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

      <div>
        <h4>Instructions</h4>
        <p data-testid="instructions">{ drinkProgress[0].strInstructions }</p>
      </div>

      <Link to="/receitas-feitas">
        <button
          type="button"
          className="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Tarefa
        </button>
      </Link>

    </div>
  );
}
export default DrinkInProgress;
