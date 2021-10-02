import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../components/Footer';

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
      <Footer />
    </div>
  );
}

export default Explore;
