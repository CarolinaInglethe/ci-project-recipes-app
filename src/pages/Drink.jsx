import React, { useEffect, useState } from 'react';

function Drink() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setDrinks(resp.drinks));
  }, []);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((resp) => {
        setCategories(resp.drinks);
      });
  }, []);

  const eleven = 11;
  const five = 5;

  return (
    <div>
      <p>Tela principal de Receitas:</p>

      <div>
        <button type="button">All</button>
        {
          categories.map((catego, index) => (
            index < five
              ? (
                <button
                  data-testid={ `${catego.strCategory}-category-filter` }
                  key={ index }
                  type="button"
                >

                  {catego.strCategory}

                </button>
              ) : null
          ))
        }
      </div>

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
