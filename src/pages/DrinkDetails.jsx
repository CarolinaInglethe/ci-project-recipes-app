import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import isNotFavoriteIcon from '../images/whiteHeartIcon.svg';
// import isFavoriteIcon from '../images/blackHeartIcon.svg';

import './RecipeDetails.css';

function DrinkDetails() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [recommendedFoods, setRecommendedFoods] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // No magic Numbers
  const firstSixRecommendedCards = 6;
  const oneSecondDisplayCopiedLink = 1000;

  const copiedUrlMessage = <p>Link copiado!</p>;

  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  const { id } = useParams();

  // Fetch para detalhes de uma receita
  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await response.json();

      setDrinkDetails(drinks);
    };
    fetchDrinks();
  }, [id]);

  // Fetch para comidas recomendadas
  useEffect(() => {
    const fetchRecommended = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();

      setRecommendedFoods(meals.slice(0, firstSixRecommendedCards));
    };
    fetchRecommended();
  }, []);

  if ((!drinkDetails.length || !recommendedFoods.length)) {
    return <h2>Loading Recipe Details...</h2>;
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

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), oneSecondDisplayCopiedLink);
  };

  return (
    <div>
      <img
        src={ drinkDetails[0].strDrinkThumb }
        alt={ drinkDetails[0].strDrink }
        data-testid="recipe-photo"
        height="250px"
      />
      <div>
        <h3 data-testid="recipe-title">{ drinkDetails[0].strDrink }</h3>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ handleCopy }
        >
          <img src={ shareIcon } alt="share button" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ isNotFavoriteIcon } alt="Like button" />
        </button>
        {copiedUrl && copiedUrlMessage}
      </div>
      <h4
        data-testid="recipe-category"
        className="category-text"
      >
        { drinkDetails[0].strAlcoholic }
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
        {/* <img src="" alt="" data-testid={ `${index}-recomendation-card` } /> */}
      </div>
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
