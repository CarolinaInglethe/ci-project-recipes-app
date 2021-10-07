import React, { useContext } from 'react';

import RecipesAppContext from '../context/RecipesAppContext';

import HeaderWithSearchDrink from '../components/HeaderWithSearchDrink';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';
import DrinkCategoryButtons from '../components/DrinkCategoryButtons';
import MainDrinkCards from '../components/MainDrinkCards';

function Drink() {
  const { filteredDrinks } = useContext(RecipesAppContext);

  if (filteredDrinks === null || filteredDrinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (filteredDrinks.length > 1) {
    return (<DrinkCards />);
  }

  return (
    <div>
      <HeaderWithSearchDrink titlePage="Bebidas" />
      <p>Tela principal de Receitas:</p>
      <DrinkCategoryButtons />
      <MainDrinkCards />
      <Footer />
    </div>
  );
}

export default Drink;
