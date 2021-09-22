import React from 'react';
import { useHistory } from 'react-router';

function Explore() {
  const history = useHistory();

  return (
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
  );
}

export default Explore;
