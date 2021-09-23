import React, { useEffect, useState } from 'react';

function ExploreDrinkByIngredient() {
  const [ingredients, setIngredients] = useState([]);
  const doze = 12;

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((result) => {
        setIngredients(result.drinks);
      });
  }, []);

  if (ingredients.length === 0) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div data-testid="explore-by-ingredient">
      <p>ExploreDrinkByIngredient</p>
      {
        ingredients
          .slice(0, doze)
          .map((ingredient, index) => (
            <div
              data-testid={ `${index}-ingredient-card` }
              key={ ingredient.strIngredient1 }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png` }
                height="100px"
                alt={ `Imagem de ${ingredient.strIngredient1}` }
              />
              <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
            </div>
          ))
      }
    </div>
  );
}

export default ExploreDrinkByIngredient;
