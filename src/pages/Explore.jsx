import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <Header titlePage="Explorar" />
      <div>
        <p>Explore</p>
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
    </div>
  );
}

export default Explore;
