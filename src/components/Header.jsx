import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <header>
        <Link to="/perfil">
          <button type="button">
            <img
              src={ profileIcon }
              alt="Icone de Perfil"
              id="profile-top-btn"
              data-testid="profile-top-btn"
            />
          </button>
        </Link>
        <h2 data-testid="page-title">Comidas</h2>
      </header>
      <Link to="/explorar">
        <button type="button">
          <img
            src={ searchIcon }
            alt="Icone de Pesquisa"
            id="search-top-btn"
            data-testid="search-top-btn"
          />
        </button>
      </Link>
    </div>
  );
}

export default Header;

// Pesquisas:
// https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
// https://reactrouter.com/web/api/Hooks/usehistory
