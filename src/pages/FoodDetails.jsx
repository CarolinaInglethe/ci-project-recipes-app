import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import shareIcon from '../images/shareIcon.svg';
import isNotFavoriteIcon from '../images/whiteHeartIcon.svg';
// import isFavoriteIcon from '../images/blackHeartIcon.svg';

function FoodDetails() {
  const [foodDetails, setFoodDetails] = useState();
  const [recommendedDrinks, setRecommendedDrinks] = useState();

  // No magic Numbers
  const startOfTheIdInPathName = 9;
  const endOfTheIdInPathName = 14;
  const startOfTheStrIngredientsIndex = 9;
  const endOfTheStrIngredientsIndex = 28;
  const startOfTheStrMeasuresIndex = 31;
  const endOfTheStrMeasuresIndex = 48;
  const firstSixRecommendedCards = 6;

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  const history = useHistory();
  const pathName = history.location.pathname;
  // Exemplo de pathname: /comidas/52971
  const id = pathName.slice(startOfTheIdInPathName, endOfTheIdInPathName);

  // Fetch para detalhes de uma receita
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json())
      .then((response) => setFoodDetails(Object.values(response.meals)));
  }, [id]);

  // Fetch para drinks recomendados
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((data) => data.json())
      .then((response) => Object.values(response).forEach((value) => {
        setRecommendedDrinks(value.slice(0, firstSixRecommendedCards));
      }));
  }, []);

  console.log(recommendedDrinks);

  if (foodDetails === undefined) return <h2>Loading Recipe Details...</h2>;

  if (foodDetails) {
    Object.values(foodDetails[0]).map((value, index) => {
      if (index >= startOfTheStrIngredientsIndex
        && index <= endOfTheStrIngredientsIndex) {
        values.push(value);
      } else if (
        index >= startOfTheStrMeasuresIndex && index <= endOfTheStrMeasuresIndex
      ) {
        measures.push(value);
      }
      return values && measures;
    });
  }

  const youtubeUrl = foodDetails[0].strYoutube.replace('watch?v=', 'embed/');

  return (
    <div>
      <img
        src={ foodDetails[0].strMealThumb }
        alt={ foodDetails[0].strMeal }
        data-testid="recipe-photo"
        height="250px"
      />
      <div>
        <h3 data-testid="recipe-title">{ foodDetails[0].strMeal }</h3>
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share button" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ isNotFavoriteIcon } alt="Like button" />
        </button>
      </div>
      <h4 data-testid="recipe-category">{ foodDetails[0].strCategory }</h4>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {
            values.map((ingredient, index) => {
              if (ingredient !== '' && ingredient !== null) {
                return (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { ingredient }
                    { ' - ' }
                    { measures[index] }
                  </li>);
              }
              return null; // Pro lint não reclamar :(
            })
          }
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <p data-testid="instructions">{ foodDetails[0].strInstructions }</p>
      </div>
      <div>
        <h3>Vídeo</h3>
        <iframe
          src={ youtubeUrl }
          frameBorder="0"
          data-testid="video"
          title="recipe"
          allowFullScreen
          ng-show="showvideo"
        />
      </div>
      <div>
        <h3>Recomendadas</h3>
        {/* <img src="" alt="" data-testid={ `${index}-recomendation-card` } /> */}
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default FoodDetails;
