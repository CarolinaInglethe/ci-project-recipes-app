import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesAppContext from './RecipesAppContext';

function RecipesAppProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const contextValue = {
    inputValue,
    setInputValue,
    radioValue,
    setRadioValue,
    filteredFoods,
    setFilteredFoods,
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
