import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarDrink from './SearchBarDrink';
import './Header.css';

function HeaderWithSearchDrink({ titlePage }) {
  const [toggleInput, setToggleInput] = useState(false);

  return (
    <header>
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="Icone de Perfil"
          data-testid="profile-top-btn"
        />
      </Link>
      <div className="header">
        <h2 data-testid="page-title">{ titlePage }</h2>
      </div>
      <div>
        {toggleInput && (
          <SearchBarDrink />
        )}
        <button
          type="button"
          onClick={ () => setToggleInput(!toggleInput) }
        >
          <img src={ searchIcon } alt="Ícone pesquisa" data-testid="search-top-btn" />
        </button>
      </div>
    </header>
  );
}
HeaderWithSearchDrink.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default HeaderWithSearchDrink;

// Pesquisas:
// https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
// https://reactrouter.com/web/api/Hooks/usehistory
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md