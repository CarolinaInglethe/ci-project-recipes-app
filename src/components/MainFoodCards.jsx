import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import RecipesAppContext from '../context/RecipesAppContext';

function MainFoodCards() {
  const {
    foods,
    setFoods,
    filteredCategories,
    selectedCategory,
    setFilteredCategories,
  } = useContext(RecipesAppContext);
  console.log(selectedCategory);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setFoods(resp.meals));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCategory !== undefined) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((result) => setFilteredCategories(result.meals));
    }
    console.log(filteredCategories);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);
  // looping corrigido com auxilio do colega Felipe

  if (foods.length === 0) {
    return <h4>Carregando...</h4>;
  }
  const eleven = 11;

  return (
    <div className="list-recipes">
      {
        // Filtro se caso categoria tiver sido selecionada:
        // atraves do resultado do filter(array novo) faço map e renderizo alimentos da categoria selecionada
        selectedCategory !== undefined ? (
          filteredCategories
            .map((currentFood, index) => (
              index <= eleven
                ? (
                  <Link to={ `/comidas/${currentFood.idMeal}` }>
                    <div
                      className="card-food"
                      key={ currentFood.strMeal }
                      data-testid={ `${index}-recipe-card` }
                    >
                      <img
                        src={ currentFood.strMealThumb }
                        alt="receita  "
                        width="100px"
                        data-testid={ `${index}-card-img` }
                      />
                      <p // Lint reclamou da quantidade caractereres, por isso mudei de linha
                        data-testid={ `${index}-card-name` }
                      >
                        { currentFood.strMeal }
                      </p>
                      <p data-testid={ `${selectedCategory}-category-filter` } />
                    </div>
                  </Link>
                ) : null
            ))
        ) // se Categoria tiver undefined (nao selecionada) retorno map de receitas totais (12 da api)
          : foods.map((food, index) => (
            index <= eleven
              ? (
                <Link to={ `/comidas/${food.idMeal}` }>
                  <div
                    className="card-food"
                    key={ index }
                    data-testid={ `${index}-recipe-card` }
                  >
                    <img
                      src={ food.strMealThumb }
                      alt="receita  "
                      width="100px"
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
                  </div>

                </Link>
              ) : null
          ))
      }
    </div>
  );
}

export default MainFoodCards;
