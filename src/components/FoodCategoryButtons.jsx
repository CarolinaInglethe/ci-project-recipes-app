import React, { useEffect, useContext } from 'react';

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
  }, []);

  const handleClickCategories = (category) => {
    if (selectedCategory !== undefined) {
      setSelectedCategory(undefined);
    }
    setSelectedCategory(category);
    // console.log(selectedCategory);
  };

  const five = 5;

  return (
    <div>
      { console.log('teste') }
      {/* // Botoes para escolher categoria : */}
      <button
        type="button"
        onClick={ () => handleClickCategories(undefined) }
        data-testid="All-category-filter"
      >
        All
      </button>
      {
        categories.map((catego, index) => (
          index < five
            ? (
              <button
                data-testid={ `${catego.strCategory}-category-filter` }
                key={ index }
                type="button"
                onClick={ () => handleClickCategories(catego.strCategory) }
              >
                {catego.strCategory}
              </button>
            ) : null
        ))
      }
    </div>
  );
}

export default FoodCategoryButtons;
