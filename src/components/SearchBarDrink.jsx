import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import RecipesAppContext from '../context/RecipesAppContext';

import './SearchBar.css';

// estado da barra de pesquisa
function SearchBarDrink() {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const { filteredDrinks, setFilteredDrinks } = useContext(RecipesAppContext);

  const handleSearchInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleRadioInput = ({ target }) => {
    setRadioValue(target.value);
  };

  useEffect(() => {
    if (inputValue.length > 1 && radioValue === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [inputValue, radioValue]);

  function handleClick() {
    if (radioValue === 'ingredient') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`)
        .then((response) => response.json())
        .then((result) => setFilteredDrinks(result.drinks));
    }

    if (radioValue === 'name') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json())
        .then((result) => setFilteredDrinks(result.drinks));
    }

    if (radioValue === 'firstLetter') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then((response) => response.json())
        .then((result) => setFilteredDrinks(result.drinks));
    }
  }

  if (filteredDrinks === null || filteredDrinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (filteredDrinks.length === 1) {
    return (
      <Redirect to={ `/bebidas/${filteredDrinks.map((drink) => drink.idDrink)}` } />
    );
  }

  return (
    <div>
      <div className="search-input">
        <input
          data-testid="search-input"
          type="text"
          name="search"
          placeholder="Buscar Receita"
          value={ inputValue }
          onChange={ handleSearchInput }
        />
        <label htmlFor="ingredient-search">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="radioSelect"
            value="ingredient"
            onChange={ handleRadioInput }
          />
          Ingredientes
        </label>
        <label htmlFor="name-search">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="radioSelect"
            value="name"
            onChange={ handleRadioInput }
          />
          Nome
        </label>
        <label htmlFor="first-letter-search">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="radioSelect"
            value="firstLetter"
            onChange={ handleRadioInput }
          />
          Primeira letra
        </label>
        <div className="search-button">
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ handleClick }
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBarDrink;

// Pesquisas:
// https://github.com/tryber/sd-013-b-project-recipes-app/blob/main-group-9-searchHeader/src/components/SearchInput.js
// https://eslint.org/docs/rules/no-unused-vars
