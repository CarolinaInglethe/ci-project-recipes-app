import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const jsonEmail = JSON.parse(localStorage.getItem('user'));
  const userEmail = jsonEmail.email;

  function userLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <Header titlePage="Perfil" />
      <div>
        <h3 data-testid="profile-email">{ userEmail }</h3>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ userLogout }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
