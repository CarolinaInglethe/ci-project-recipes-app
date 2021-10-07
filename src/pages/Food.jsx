import React, { useContext } from 'react';

import RecipesAppContext from '../context/RecipesAppContext';

import HeaderWithSearchFood from '../components/HeaderWithSearchFood';
import Footer from '../components/Footer';
import FoodCards from '../components/FoodCards';
import FoodCategoryButtons from '../components/FoodCategoryButtons';
import MainFoodCards from '../components/MainFoodCards';

function Food() {
  const {
    filteredFoods,
  } = useContext(RecipesAppContext);

  if (filteredFoods === null || filteredFoods === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (filteredFoods.length > 1) {
    return (<FoodCards />);
  }

  return (
    <div>
      <HeaderWithSearchFood titlePage="Comidas" />
      <div>
        <p>Tela principal de Receitas:</p>
        <FoodCategoryButtons />
        <MainFoodCards />
        <Footer />
      </div>
    </div>
  );
}

export default Food;
