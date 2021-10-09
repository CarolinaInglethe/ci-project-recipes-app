import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import RecipesAppContext from '../context/RecipesAppContext';

function ExploreFoodByIngredient() {
  const { foodIngredients,
    memoizedHandleFetchFoodIngredients,
    setSelectedFoodIngredient,
  } = useContext(RecipesAppContext);

  const doze = 12;

  useEffect(() => {
    memoizedHandleFetchFoodIngredients();
  }, [memoizedHandleFetchFoodIngredients]);

  if (foodIngredients.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div data-testid="explore-by-ingredient">
      <p>ExploreFoodByIngredient</p>
      {foodIngredients.slice(0, doze).map((ingredient, index) => (
        <Link
          to="/comidas"
          key={ index }
          onClick={ () => setSelectedFoodIngredient(ingredient.strIngredient) }
        >
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ ingredient.strIngredient }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              height="100px"
              alt={ `Imagem de ${ingredient.strIngredient}` }
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreFoodByIngredient;
