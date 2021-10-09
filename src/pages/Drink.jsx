import React, { useContext } from 'react';

import RecipesAppContext from '../context/RecipesAppContext';

import HeaderWithSearchDrink from '../components/HeaderWithSearchDrink';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';
import DrinkCategoryButtons from '../components/DrinkCategoryButtons';
import MainDrinkCards from '../components/MainDrinkCards';
import DrinkFilteredByIngredient from '../components/DrinkFilteredByIngredient';

function Drink() {
  const {
    filteredDrinks,
    selectedDrinkIngredient,
  } = useContext(RecipesAppContext);

  if (filteredDrinks === null || filteredDrinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (filteredDrinks.length > 1) {
    return (<DrinkCards />);
  }

  if (selectedDrinkIngredient === '' || filteredDrinks.length > 1) {
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
  return (
    <div>
      <HeaderWithSearchDrink titlePage="Bebidas" />
      <p>Tela principal de Receitas:</p>
      <DrinkCategoryButtons />
      <DrinkFilteredByIngredient />
      <Footer />
    </div>
  );
}

export default Drink;
