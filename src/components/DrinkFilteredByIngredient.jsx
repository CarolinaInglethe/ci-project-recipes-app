import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import RecipesAppContext from '../context/RecipesAppContext';

function DrinkFilteredByIngredient() {
  const {
    selectedDrinkIngredient,
    drinkIngredients,
    setDrinkIngredients,
  } = useContext(RecipesAppContext);

  const doze = 12;

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedDrinkIngredient}`).then((response) => response.json()).then((result) => setDrinkIngredients(result.drinks));
  }, [selectedDrinkIngredient, setDrinkIngredients]);

  return (
    drinkIngredients.slice(0, doze).map((drink, index) => (
      <React.Fragment key={ drink.idDrink }>
        <Link to={ `/bebidas/${drink.idDrink}` }>
          <div
            className="card-drink"
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ drink.strDrinkThumb }
              alt="receita  "
              width="100px"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
          </div>
        </Link>
        <Footer />
      </React.Fragment>

    )));
}

export default DrinkFilteredByIngredient;
