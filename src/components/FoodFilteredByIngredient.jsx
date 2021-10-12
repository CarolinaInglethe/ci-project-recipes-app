import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import RecipesAppContext from '../context/RecipesAppContext';

function FoodFilteredByIngredient() {
  const {
    selectedFoodIngredient,
    foodIngredients,
    setFoodIngredients,
  } = useContext(RecipesAppContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedFoodIngredient}`).then((response) => response.json()).then((result) => setFoodIngredients(result.meals));
  }, [selectedFoodIngredient, setFoodIngredients]);

  return (
    foodIngredients.map((food, index) => (
      <React.Fragment key={ food.idMeal }>
        <Link to={ `/comidas/${food.idMeal}` }>
          <div
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ food.strMealThumb }
              alt="receita  "
              width="100px"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
          </div>
        </Link>
        <Footer />
      </React.Fragment>
    )));
}

export default FoodFilteredByIngredient;
