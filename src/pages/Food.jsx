import React, { useEffect, useState } from 'react';

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
    setSelectedCategory(category);
  };

  if (foods.length === 0) {
    return <h4>Carregando...</h4>;
  }

  const eleven = 11;
  const five = 5;

  return (
    <div>
      <p>Tela principal de Receitas:</p>

      <div>
        {/* // Botoes para escolher categoria : */}
        <button
          type="button"
          onClick={ () => handleClickCategories(undefined) }
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
              .map(({ idMeal, strMeal, strMealThumb, strCategory }, index) => (
                index <= eleven
                  ? (
                    <div
                      key={ idMeal }
                      data-testid={ `${index}-recipe-card` }
                    >
                      <img
                        src={ strMealThumb }
                        alt="receita  "
                        width="100px"
                        data-testid={ `${index}-card-img` }
                      />
                      <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
                      <p data-testid={ `${strCategory}-category-filter` } />
                    </div>
                  ) : null
              ))
          ) // se Categoria tiver undefined (nao selecionada) retorno map de receitas totais (12 da api)
            : foods.map(({ idMeal, strMeal, strMealThumb }, index) => (
              index <= eleven
                ? (
                  <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ strMealThumb }
                      alt="receita  "
                      width="100px"
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{ strMeal }</p>

                  </div>
                ) : null
            ))
        }
      </div>
    </div>
  );
}

export default Food;
