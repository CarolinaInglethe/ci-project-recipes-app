import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';

function ExploreFoodByIngredient() {
  return (
    <div>
      <Header titlePage="Explorar Ingredientes" />
      <div data-testid="explore-by-ingredient">
        <p>ExploreFoodByIngredient</p>
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByIngredient;
