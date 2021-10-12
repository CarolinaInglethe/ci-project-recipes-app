import React, { useState, useCallback } from 'react';
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
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [selectedFoodIngredient, setSelectedFoodIngredient] = useState('');
  const [selectedDrinkIngredient, setSelectedDrinkIngredient] = useState('');
  const [foodOrigins, setFoodOrigins] = useState([]);
  const [selectedFoodOrigin, setSelectedFoodOrigin] = useState('American');
  const [mealsByOrigin, setMealsByOrigin] = useState([]);

  const MAX_INGREDIENTS = 12;
  const MAX_ORIGINS = 27;

  function handleFetchFoodIngredients() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((result) => {
        setFoodIngredients(result.meals.slice(0, MAX_INGREDIENTS));
      });
  }
  const memoizedHandleFetchFoodIngredients = useCallback(
    () => {
      handleFetchFoodIngredients();
    },
    [],
  );

  function handleFetchDrinkIngredients() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((result) => {
        setDrinkIngredients(result.drinks.slice(0, MAX_INGREDIENTS));
      });
  }
  const memoizedHandleFetchDrinkIngredients = useCallback(
    () => {
      handleFetchDrinkIngredients();
    },
    [],
  );

  function handleFetchFoodOrigins() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((result) => {
        setFoodOrigins(result.meals.map((meal) => meal.strArea).slice(0, MAX_ORIGINS));
        // setFoodOrigins(result.meals);
      });
  }
  const memoizedHandleFetchFoodOrigins = useCallback(
    () => {
      handleFetchFoodOrigins();
    },
    [],
  );

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
    foodIngredients,
    setFoodIngredients,
    selectedFoodIngredient,
    setSelectedFoodIngredient,
    drinkIngredients,
    setDrinkIngredients,
    selectedDrinkIngredient,
    setSelectedDrinkIngredient,
    memoizedHandleFetchFoodIngredients,
    memoizedHandleFetchDrinkIngredients,
    foodOrigins,
    setFoodOrigins,
    selectedFoodOrigin,
    setSelectedFoodOrigin,
    memoizedHandleFetchFoodOrigins,
    mealsByOrigin,
    setMealsByOrigin,
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
