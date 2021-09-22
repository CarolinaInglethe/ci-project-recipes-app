import React, { useEffect, useState } from 'react';

function Drink() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setDrinks(resp.drinks));
  }, []);

  const eleven = 11;

  return (
    <div>
      <p>Tela principal de Receitas:</p>
      <div className="list-recipes">
        {
          drinks.length !== 0
            ? drinks.map((drink, index) => (
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
            )) : <h4>Carregando...</h4>
        // console.log(recipes.drinks)
        }
      </div>

    </div>
  );
}

export default Drink;
