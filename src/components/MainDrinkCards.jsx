import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import RecipesAppContext from '../context/RecipesAppContext';

function MainDrinkCards() {
  const { drinks,
    setDrinks,
    filteredDrinkCategories,
    setFilteredDrinkCategories,
    selectedDrinkCategory,
  } = useContext(RecipesAppContext);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((resp) => setDrinks(resp.drinks));
    console.log(drinks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedDrinkCategory !== undefined) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedDrinkCategory}`)
        .then((response) => response.json())
        .then((result) => setFilteredDrinkCategories(result.drinks));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDrinkCategory]);

  if (drinks.length === 0) {
    return <h4>Carregando...</h4>;
  }

  const eleven = 11;

  return (
    <div className="list-recipes">
      {
        // Filtro se caso categoria tiver sido selecionada:
        // atraves do resultado do filter(array novo) faço map e renderizo alimentos da categoria selecionada:
        selectedDrinkCategory !== undefined ? (
          filteredDrinkCategories
            .map((drink, index) => (
              index <= eleven
                ? (
                  <Link to={ `/bebidas/${drink.idDrink}` }>
                    <div
                      key={ drink.idDrink }
                      data-testid={ `${index}-recipe-card` }
                    >

                      <img
                        src={ drink.strDrinkThumb }
                        alt="receita  "
                        width="100px"
                        data-testid={ `${index}-card-img` }
                      />
                      <p
                        data-testid={ `${index}-card-name` }
                      >
                        { drink.strDrink }
                      </p>
                      <p
                        data-testid={ `${drink.strCategory}-category-filter` }
                      />
                    </div>
                  </Link>
                ) : null
            ))
        ) // se Categoria tiver undefined (nao selecionada) retorno map de receitas totais (12 da api)
          : drinks.map((drink, index) => (
            index <= eleven
              ? (
                <Link to={ `/bebidas/${drink.idDrink}` }>
                  <div
                    key={ drink.idDrink }
                    data-testid={ `${index}-recipe-card` }
                  >
                    <img
                      src={ drink.strDrinkThumb }
                      alt="receita  "
                      width="100px"
                      data-testid={ `${index}-card-img` }
                    />
                    <p
                      data-testid={ `${index}-card-name` }
                    >
                      { drink.strDrink }

                    </p>
                  </div>
                </Link>
              ) : null
          ))
      }
    </div>
  );
}

export default MainDrinkCards;
