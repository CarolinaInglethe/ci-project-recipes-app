import React, { useEffect, useContext } from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

import RecipesAppContext from '../context/RecipesAppContext';

function FoodCategoryButtons() {
  const { categories, setCategories } = useContext(RecipesAppContext);
  const { selectedCategory, setSelectedCategory } = useContext(RecipesAppContext);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((resp) => {
        setCategories(resp.meals);
      });
  }, [setCategories]);

  const handleClickCategories = (category) => {
    if (selectedCategory !== undefined) {
      setSelectedCategory(undefined);
    }
    setSelectedCategory(category);
    // console.log(selectedCategory);
  };

  const five = 5;

  return (
    <ButtonToolbar className="me-2">
      { console.log('teste') }
      {/* // Botoes para escolher categoria : */}
      <Button
        variant="secondary"
        className="button-categories mb-3"
        type="button"
        onClick={ () => handleClickCategories(undefined) }
        data-testid="All-category-filter"
      >
        All
      </Button>
      {
        categories.map((catego, index) => (
          index < five
            ? (
              <Button
                variant="secondary"
                className="button-categories mb-3"
                data-testid={ `${catego.strCategory}-category-filter` }
                key={ index }
                type="button"
                onClick={ () => handleClickCategories(catego.strCategory) }
              >
                {catego.strCategory}
              </Button>
            ) : null
        ))
      }
    </ButtonToolbar>
  );
}

export default FoodCategoryButtons;
