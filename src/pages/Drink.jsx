import React, { useEffect, useState } from 'react';

function Drink() {
  const [recipes, setRecipes] = useState({
    foods: [],
    drinks: [],
  });

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setRecipes({
        ...recipes,
        drinks: resp.drinks,
      }));
  }, []);

  const eleven = 11;

  return (
    <div>
      <p>Tela principal de Receitas:</p>
      <div>
        {
          recipes.drinks.map((drink, index) => (
            index <= eleven
              ? (
                <div data-testid={ `${index}-recipe-card` }>
                  <img
                    src={ drink.strDrinkThumb }
                    alt="receita  "
                    width="100px"
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
                </div>
              ) : null
          ))
        // console.log(recipes.drinks)
        }
      </div>

    </div>
  );
}

export default Drink;
