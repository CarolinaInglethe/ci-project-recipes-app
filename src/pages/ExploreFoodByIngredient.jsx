import React, { useEffect, useState } from 'react';

function ExploreFoodByIngredient() {
  const [ingredients, setIngredients] = useState([]);
  const doze = 12;

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((result) => {
        setIngredients(result.meals);
      });
  }, []);

  if (ingredients.length === 0) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div data-testid="explore-by-ingredient">
      <p>ExploreFoodByIngredient</p>
      {
        ingredients
          .slice(0, doze)
          .map((ingredient, index) => (
            <div
              data-testid={ `${index}-ingredient-card` }
              key={ ingredient.strIngredient }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
                height="100px"
                alt={ `Imagem de ${ingredient.strIngredient}` }

              />
              <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
            </div>
          ))
      }
    </div>
  );
}

export default ExploreFoodByIngredient;
