import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import shareIcon from '../images/shareIcon.svg';
import isNotFavoriteIcon from '../images/whiteHeartIcon.svg';
// import isFavoriteIcon from '../images/blackHeartIcon.svg';

import './RecipeDetails.css';

function FoodDetails() {
  const [foodDetails, setFoodDetails] = useState();
  const [recommendedDrinks, setRecommendedDrinks] = useState();

  // No magic Numbers
  const startOfTheIdInPathName = 9;
  const endOfTheIdInPathName = 14;
  const firstSixRecommendedCards = 6;

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes
  const drinkRecommendations = [];

  const history = useHistory();
  const pathName = history.location.pathname;
  // Exemplo de pathname: /comidas/52971
  const id = pathName.slice(startOfTheIdInPathName, endOfTheIdInPathName);

  // Fetch para detalhes de uma receita
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json())
      .then((response) => setFoodDetails(Object.values(response.meals)));
  }, []);

  // Fetch para drinks recomendados
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((data) => data.json())
      .then((response) => Object.values(response).forEach((value) => {
        setRecommendedDrinks(value.slice(0, firstSixRecommendedCards));
      }));
  }, []);

  if (foodDetails === undefined) return <h2>Loading Recipe Details...</h2>;

  // Teste com o método includes
  if (foodDetails) {
    Object.keys(foodDetails[0])
      .forEach((key) => {
        if (key.includes('strIngredient') && foodDetails[0][key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = foodDetails[0][`strMeasure${ingredientNumber}`];
          values.push(foodDetails[0][key]);
          measures.push(measure);
        }
      });
  }

  if (recommendedDrinks !== undefined && recommendedDrinks !== null) {
    recommendedDrinks
      .slice(0, firstSixRecommendedCards)
      .forEach((recommendations) => {
        drinkRecommendations.push(recommendations);
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
      <h4
        data-testid="recipe-category"
        className="category-text"
      >
        { foodDetails[0].strCategory }
      </h4>
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
      <h3>Recomendations</h3>
      <div className="flex carousel">
        {
          drinkRecommendations.map((recommendations, index) => (
            <div
              key={ recommendations.idDrink }
              data-testid={ `${index}-recomendation-card` }
              className="recipe-card"
            >
              <img
                src={ recommendations.strDrinkThumb }
                alt={ recommendations.strDrink }
                height="150px"
              />
              <p className="category-text">{ recommendations.strCategory }</p>
              <p
                data-testid={ `${index}-recomendation-title` }
              >
                { recommendations.strDrink }
              </p>
            </div>
          ))
        }
        {/* <img src="" alt="" data-testid={ `${index}-recomendation-card` } /> */}
      </div>
      <div className="align-center">
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="button"
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}

export default FoodDetails;
