import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-inputs">
      <label htmlFor="search-input">
        <input
          className="text-input"
          type="text"
          id="search-input"
          name="search-input"
          placeholder="Buscar Receita"
          data-testid="search-input"
        />
      </label>
      <br />
      <div className="radio-search">
        <label htmlFor="radio-search">
          <input
            type="radio"
            id="ingredient-search-radio"
            name="radio-search"
            value="ingredient"
            data-testid="ingredient-search-radio"
          />

          Ingrediente
        </label>
        <label htmlFor="radio-search">
          <input
            type="radio"
            id="name-search-radio"
            name="radio-search"
            value="name"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="radio-search">
          <input
            type="radio"
            id="first-letter-search-radio"
            name="radio-search"
            value="first-letter"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <div className="search-button">
        <button type="button" data-test-id="exec-search-btn">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
