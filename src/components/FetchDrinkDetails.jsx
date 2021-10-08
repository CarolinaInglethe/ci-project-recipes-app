import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import loading from '../images/loading.gif';

function FetchDrinkDetails() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [recommendedFoods, setRecommendedFoods] = useState([]);

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  const { id } = useParams();

  // No magic Numbers
  const firstSixRecommendedCards = 6;

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await response.json();

      setDrinkDetails(drinks);
    };
    fetchDrinks();

    // Fetch para comidas recomendadas
    const fetchRecommended = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();

      setRecommendedFoods(meals.slice(0, firstSixRecommendedCards));
    };
    fetchRecommended();
  }, [id]);

  if ((!drinkDetails.length || !recommendedFoods.length)) {
    return <img src={ loading } alt="loading" />;
  }

  // Renderizando os ingredientes com o método includes
  if (drinkDetails) {
    Object.keys(drinkDetails[0])
      .forEach((key) => {
        if (key.includes('strIngredient') && drinkDetails[0][key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = drinkDetails[0][`strMeasure${ingredientNumber}`];
          values.push(drinkDetails[0][key]);
          measures.push(measure);
        }
      });
  }

  return (
    <div>
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
        <p data-testid="instructions">{ drinkDetails[0].strInstructions }</p>
      </div>
      <div>
        <h3>Recomendations</h3>
        <div className="flex carousel">
          {
            recommendedFoods.map((recommendations, index) => (
              <div
                key={ recommendations.idMeal }
                data-testid={ `${index}-recomendation-card` }
                className="recipe-card"
              >
                <img
                  src={ recommendations.strMealThumb }
                  alt={ recommendations.strMeal }
                  height="150px"
                />
                <p className="category-text">{ recommendations.strCategory }</p>
                <p
                  data-testid={ `${index}-recomendation-title` }
                >
                  { recommendations.strMeal }
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FetchDrinkDetails;
