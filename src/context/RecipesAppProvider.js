import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesAppContext from './RecipesAppContext';

function RecipesAppProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [foods, setFoods] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [selectedDrinkCategory, setSelectedDrinkCategory] = useState(undefined);
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinkCategories, setFilteredDrinkCategories] = useState([]);

  const contextValue = {
    inputValue,
    setInputValue,
    radioValue,
    setRadioValue,
    filteredFoods,
    setFilteredFoods,
    filteredDrinks,
    setFilteredDrinks,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    foods,
    setFoods,
    filteredCategories,
    setFilteredCategories,
    drinkCategories,
    setDrinkCategories,
    selectedDrinkCategory,
    setSelectedDrinkCategory,
    drinks,
    setDrinks,
    filteredDrinkCategories,
    setFilteredDrinkCategories,
  };

  return (
    <RecipesAppContext.Provider value={ contextValue }>
      {children}
    </RecipesAppContext.Provider>
  );
}
export default RecipesAppProvider;

RecipesAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
