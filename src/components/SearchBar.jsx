import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import './SearchBar.css';

// estado da barra de pesquisa
function SearchBar(props) {
  const [inputSearch, setInputSearch] = useState({
    search: '',
    radioSelect: '',
  });
  const history = useHistory();

  function handleSearchInput({ target }) {
    const { name, value } = target;
    setInputSearch({ ...inputSearch, [name]: value });
  }
  async function handleClick() {
    const { pathname } = history.location;
    const { search, radioSelect } = inputSearch;
    if (search.length > 1 && radioSelect === 'f') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const request = await props.fetchFood(radioSelect, search);
    const typeRecipe = request.meals || request.drinks;
    if (typeRecipe.length === 1) {
      history.push(`${pathname}/${typeRecipe[0].idMeal || typeRecipe[0].idDrink}`);
    }
  }
  return (
    <div>
      <div className="search-bar-inputs">
        <input
          data-testid="search-input"
          name="search"
          placeholder="Buscar Receita"
          type="text"
          value={ inputSearch.search }
          onChange={ handleSearchInput }
        />
        <label htmlFor="ingredient-search">
          <input
            type="radio"
            id="ingredient-search-radio"
            name="radioSelect"
            value="ingredient"
            data-testid="ingredient-search-radio"
            onChange={ handleSearchInput }
          />
          Ingredientes
        </label>
        <label htmlFor="name-search">
          <input
            type="radio"
            id="name-search-radio"
            name="radioSelect"
            value="name"
            data-testid="name-search-radio"
            onChange={ handleSearchInput }
          />
          Nome
        </label>
        <label htmlFor="first-letter-search">
          <input
            type="radio"
            id="first-letter-search-radio"
            name="radioSelect"
            value="first-letter"
            data-testid="first-letter-search-radio"
            onChange={ handleSearchInput }
          />
          Primeira letra
        </label>
        <div className="search-button">
          <button type="button" data-test-id="exec-search-btn" onClick={ handleClick }>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  fetchFood: PropTypes.func.isRequired };

export default SearchBar;

// Pesquisas:
// https://github.com/tryber/sd-013-b-project-recipes-app/blob/main-group-9-searchHeader/src/components/SearchInput.js
// https://eslint.org/docs/rules/no-unused-vars
