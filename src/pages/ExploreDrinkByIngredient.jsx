import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesAppContext from '../context/RecipesAppContext';

function ExploreDrinkByIngredient() {
  const { drinkIngredients,
    memoizedHandleFetchDrinkIngredients,
    setSelectedDrinkIngredient,
  } = useContext(RecipesAppContext);

  const doze = 12;

  useEffect(() => {
    memoizedHandleFetchDrinkIngredients();
  }, [memoizedHandleFetchDrinkIngredients]);

  if (drinkIngredients.length === 0) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div>
      <Header titlePage="Explorar Ingredientes" />
      <div data-testid="explore-by-ingredient">
        <p>ExploreDrinkByIngredient</p>
        {
          drinkIngredients
            .slice(0, doze).map((ingredient, index) => (
              <Link
                to="/bebidas"
                key={ index }
                onClick={ () => setSelectedDrinkIngredient(ingredient.strIngredient1) }
              >
                <div
                  data-testid={ `${index}-ingredient-card` }
                  key={ ingredient.strIngredient1 }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                    height="100px"
                    alt={ `Imagem de ${ingredient.strIngredient1}` }
                  />
                  <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
                </div>
              </Link>
            ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinkByIngredient;
