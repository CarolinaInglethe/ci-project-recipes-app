import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderWithSearchFood from '../components/HeaderWithSearchFood';
import Footer from '../components/Footer';
import RecipesAppContext from '../context/RecipesAppContext';

function ExploreFoodByOrigin() {
  const {
    foodOrigins,
    memoizedHandleFetchFoodOrigins,
    selectedFoodOrigin,
    setSelectedFoodOrigin,
  } = useContext(RecipesAppContext);

  const [mealsByOrigin, setMealsByOrigin] = useState([]);

  const MAX_ORIGINS = 27;
  const MAX_CARDS = 12;

  useEffect(() => {
    memoizedHandleFetchFoodOrigins();
  }, [memoizedHandleFetchFoodOrigins]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedFoodOrigin}`)
      .then((response) => response.json())
      .then((result) => {
        setMealsByOrigin(result.meals);
      });
  }, [selectedFoodOrigin]);

  function handleChangeSelectedArea(event) {
    setSelectedFoodOrigin(event.target.value);
  }

  if (foodOrigins.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <HeaderWithSearchFood titlePage="Explorar Origem" />
      <div>
        <p>ExploreFoodByOrigin</p>

        <select
          data-testid="explore-by-area-dropdown"
          onChange={ handleChangeSelectedArea }
        >
          <option
            data-testid="All-option"
            value="All"
          >
            All
          </option>

          {foodOrigins.slice(0, MAX_ORIGINS).map((area, index) => (
            <option
              data-testid={ `${area}-option` }
              key={ index }
              value={ area }
            >
              {area}
            </option>
          ))}
        </select>

        {mealsByOrigin.map((meal, index) => (
          <div
            // data-testid={ `${meal}-option` }
            data-testid={ `${index}-card-name` }
            key={ meal.strMeal }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              height="100px"
              alt={ `Imagem de ${meal.strMeal}` }
              key={ index }
            />
            <Link to={ `/comidas/${meal.idMeal}` }>
              <p data-testid={ `${index}-recipe-card` }>{meal.strMeal}</p>
            </Link>
            {console.log(meal)}
          </div>
        )).slice(0, MAX_CARDS)}

        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByOrigin;
