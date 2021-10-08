import React, { useEffect, useContext } from 'react';

import RecipesAppContext from '../context/RecipesAppContext';

function DrinkCategoryButtons() {
  const {
    drinkCategories,
    setDrinkCategories,
    selecteDrinkCategory,
    setSelectedDrinkCategory,
  } = useContext(RecipesAppContext);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((resp) => {
        setDrinkCategories(resp.drinks);
      });
  }, []);

  const handleClickCategory = (category) => {
    if (selecteDrinkCategory !== undefined) {
      setSelectedDrinkCategory(undefined);
    }
    setSelectedDrinkCategory(category);
  };

  const five = 5;

  return (
    <div>
      {/* // Botoes para escolher categoria : */}
      <button
        className="button-categories"
        type="button"
        onClick={ () => handleClickCategory(undefined) }
        data-testid="All-category-filter"
      >
        All
      </button>
      {
        drinkCategories.map((catego, index) => (
          index < five
            ? (
              <button
                className="button-categories"
                data-testid={ `${catego.strCategory}-category-filter` }
                key={ index }
                type="button"
                onClick={ () => handleClickCategory(catego.strCategory) }
              >
                {catego.strCategory}
              </button>
            ) : null
        ))
      }
    </div>
  );
}

export default DrinkCategoryButtons;
