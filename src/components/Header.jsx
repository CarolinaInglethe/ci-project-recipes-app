import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import profileIcon from '../images/profileIcon.svg';
import './Header.css';

function Header({ titlePage }) {
  const history = useHistory();

  return (
    <div className="container">
      <div>
        <h2 data-testid="page-title">{ titlePage }</h2>
      </div>
      <Button
        style={ { padding: '10px' } }
        variant="secondary"
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img src={ profileIcon } alt="Icone de Perfil" data-testid="profile-top-btn" />
      </Button>
    </div>
  );
}
Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Header;

// Pesquisas:
// https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
// https://reactrouter.com/web/api/Hooks/usehistory
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
