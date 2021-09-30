import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderWithSearchFood from '../components/HeaderWithSearchFood';

import Footer from '../components/Footer';

function Food() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [filteredCategories, setFilteredCategories] = useState([]);

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

  useEffect(() => {
    if (selectedCategory !== undefined) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((result) => setFilteredCategories(result.meals));
    }
  });

  const handleClickCategories = (category) => {
    if (selectedCategory !== undefined) {
      setSelectedCategory(undefined);
    }
    setSelectedCategory(category);
  };

  if (foods.length === 0) {
    return <h4>Carregando...</h4>;
  }

  const eleven = 11;
  const five = 5;

  return (
    <div>
      <HeaderWithSearchFood titlePage="Comidas" />
      <div>
        <p>Tela principal de Receitas:</p>
        <div>
          {/* // Botoes para escolher categoria : */}
          <button
            type="button"
            onClick={ () => handleClickCategories(undefined) }
            data-testid="All-category-filter"
          >
            All
          </button>
          {
            categories.map((catego, index) => (
              index < five
                ? (
                  <button
                    data-testid={ `${catego.strCategory}-category-filter` }
                    key={ index }
                    type="button"
                    onClick={ () => handleClickCategories(catego.strCategory) }
                  >

                    {catego.strCategory}

                  </button>
                ) : null
            ))
          }
        </div>

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
                      <div key={ index } data-testid={ `${index}-recipe-card` }>
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
        <Footer />
      </div>
    </div>
  );
}

export default Food;
