import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarDrink from './SearchBarDrink';
import './Header.css';

function HeaderWithSearchDrink({ titlePage }) {
  const [toggleInput, setToggleInput] = useState(false);
  const history = useHistory();

  return (
    <div className="container-header">

      <Button
        style={ { padding: '10px' } }
        variant="secondary"
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img src={ profileIcon } alt="Icone de Perfil" data-testid="profile-top-btn" />
      </Button>
      <div>
        <h2 data-testid="page-title">{ titlePage }</h2>
      </div>
      <div>
        {toggleInput && (
          <SearchBarDrink />
        )}
        <Button
          style={ { padding: '10px' } }
          variant="secondary"
          type="button"
          onClick={ () => setToggleInput(!toggleInput) }
        >
          <img src={ searchIcon } alt="Ícone pesquisa" data-testid="search-top-btn" />
        </Button>
      </div>
    </div>
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
