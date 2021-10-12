import React, { useEffect, useContext } from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

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
  }, [setDrinkCategories]);

  const handleClickCategory = (category) => {
    if (selecteDrinkCategory !== undefined) {
      setSelectedDrinkCategory(undefined);
    }
    setSelectedDrinkCategory(category);
  };

  const five = 5;

  return (
    <ButtonToolbar className="me-2">
      {/* // Botoes para escolher categoria : */}
      <Button
        variant="secondary"
        className="button-categories mb-3"
        type="button"
        onClick={ () => handleClickCategory(undefined) }
        data-testid="All-category-filter"
      >
        All
      </Button>
      {
        drinkCategories.map((catego, index) => (
          index < five
            ? (
              <Button
                variant="secondary"
                className="button-categories mb-3"
                data-testid={ `${catego.strCategory}-category-filter` }
                key={ index }
                type="button"
                onClick={ () => handleClickCategory(catego.strCategory) }
              >
                {catego.strCategory}
              </Button>
            ) : null
        ))
      }
    </ButtonToolbar>
  );
}

export default DrinkCategoryButtons;
