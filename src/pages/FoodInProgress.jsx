import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import FavoriteIcon from '../images/whiteHeartIcon.svg';

function FoodInProgress() {
  const [FoodProgress, setFoodProgress] = useState([]);
  // const [buttonDisable, setButtonDisable] = useState(true);
  // const [values] = useState([]);
  // const [measures] = useState([]);
  const { id } = useParams();

  // const checkboxsRef = useRef();

  // useLayoutEffect(() => {
  //   console.log(checkboxsRef.current);
  // });

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  // const saveLocalStorage = () => {
  //   localStorage.setItem('inProgressRecipes', JSON.stringify({
  //     meals: {
  //       [id]: [Object.keys(values).map((ingredient, index) => (
  //         index
  //       ))],
  //     },
  //   }));
  // };

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
          // setValues(FoodProgress[0][key]);
          // setMeasures(measure);
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
                      <input
                        type="checkbox"
                        name={ ingredient }
                        id={ ingredient }
                        // ref={ checkboxsRef }
                        // className="checkbox-ingredients"
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
        <p data-testid="instructions">{ FoodProgress[0].strInstructions }</p>
      </div>

      <Link to="/receitas-feitas">
        <button
          type="button"
          // disabled={ buttonDisable }
          data-testid="finish-recipe-btn"
        >
          Finalizar Tarefa
        </button>
      </Link>

    </div>
  );
}
export default FoodInProgress;
