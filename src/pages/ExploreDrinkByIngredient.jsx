import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinkByIngredient() {
  return (
    <div>
      <Header titlePage="Explorar Ingredientes" />
      <div data-testid="explore-by-ingredient">
        <p>ExploreDrinkByIngredient</p>
        <Footer />
      </div>
    </div>
  );
}

export default ExploreDrinkByIngredient;
