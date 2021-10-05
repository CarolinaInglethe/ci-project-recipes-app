import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import RecipesAppContext from '../context/RecipesAppContext';

import HeaderWithSearchDrink from '../components/HeaderWithSearchDrink';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';

function Drink() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { filteredDrinks } = useContext(RecipesAppContext);

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

  useEffect(() => {
    if (selectedCategory !== undefined) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((result) => setFilteredCategories(result.drinks));
    }
  });

  const handleClickCategorie = (category) => {
    setSelectedCategory(category);
  };

  if (drinks.length === 0) {
    return <h4>Carregando...</h4>;
  }

  if (filteredDrinks === null || filteredDrinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (filteredDrinks.length > 1) {
    return (<DrinkCards />);
  }

  const eleven = 11;
  const five = 5;

  return (
    <div>
      <HeaderWithSearchDrink titlePage="Bebidas" />
      <div>
        <p>Tela principal de Receitas:</p>
        <div>
          {/* // Botoes para escolher categoria : */}
          <button
            className="button-categories"
            type="button"
            onClick={ () => handleClickCategorie(undefined) }
            data-testid="All-category-filter"
          >
            All
          </button>
          {
            categories.map((catego, index) => (
              index < five
                ? (
                  <button
                    className="button-categories"
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
      </div>

      <div className="list-recipes">
        {
          // Filtro se caso categoria tiver sido selecionada:
          // atraves do resultado do filter(array novo) faço map e renderizo alimentos da categoria selecionada:
          selectedCategory !== undefined ? (
            filteredCategories
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
      <Footer />
    </div>
  );
}

export default Drink;
