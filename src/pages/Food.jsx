import React, { useEffect, useState } from 'react';

function Food() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);

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

  const handleClickCategorie = (category) => {
    setSelectedCategory(category);
  };

  if (foods.length === 0) {
    return <h4>Carregando...</h4>;
  }

  console.log(foods);

  const eleven = 11;
  const five = 5;

  return (
    <div>
      <p>Tela principal de Receitas:</p>

      <div>
        {/* // Botoes para escolher categoria : */}
        <button
          type="button"
          onClick={ () => handleClickCategorie(undefined) }
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
                  onClick={ () => handleClickCategorie(catego.strCategory) }
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
          selectedCategory !== undefined ? (
            foods.filter((food) => (
              // atraves do resultado do filter(array novo) faço map e renderizo alimentos da categoria selecionada
              food.strCategory === selectedCategory)).map((food2, index) => (
              index <= eleven
                ? (
                  <div key={ index } data-testid={ `${index}-recipe-card` }>
                    <img
                      src={ food2.strMealThumb }
                      alt="receita  "
                      width="100px"
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{ food2.strMeal }</p>
                    <p data-testid={ `${selectedCategory}-category-filter` }>
                      {selectedCategory}
                    </p>
                  </div>
                ) : null
            ))
          ) // se Categoria tiver undefined (nao selecionada) retorno map de receitas totais (12 da api)
            : foods.map((food, index) => (
              index <= eleven
                ? (
                  <div key={ index } data-testid={ `${index}-recipe-card` }>
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
        }
      </div>
    </div>
  );
}

export default Food;
