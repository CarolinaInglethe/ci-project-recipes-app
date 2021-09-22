import React, { useEffect, useState } from 'react';

function Food() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setFoods(resp.meals));
  }, []);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((resp) => {
        setCategories(resp.meals);
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
          foods.length !== 0
            ? foods.map((food, index) => (
              index <= eleven
                ? (
                  <div data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ food.strMealThumb }
                      alt="receita  "
                      width="100px"
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>

                  </div>
                ) : null
            ))
            : <h4>Carregando...</h4>
        // console.log(recipes.foods)
        }
      </div>
    </div>
  );
}

export default Food;
