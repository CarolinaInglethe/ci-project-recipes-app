import React, { useState } from 'react';
// import FavoriteFoods from '../components/FavoriteFoods';
import FavoriteDrinks from '../components/FavoriteDrinks';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [filterButton, setFilterButton] = useState('All');

  // function filterByButton() {
  //   if (filterButton === 'All') {
  //     return (
  //       <div>
  //         <FavoriteFoods />
  //         <FavoriteDrinks />
  //       </div>
  //     );
  //   } if (filterButton === 'Drinks') {
  //     return (
  //       <div>
  //         <FavoriteDrinks />
  //       </div>
  //     );
  //   } if (filterButton === 'Foods') {
  //     return (
  //       <div>
  //         <FavoriteFoods />
  //       </div>
  //     );
  //   }
  // }

  if (filterButton === 'All') {
    return (
      <div>
        <div>
          <Header titlePage="Receitas Favoritas" />

          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => setFilterButton('All') }
          >
            All
          </button>

          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => setFilterButton('Foods') }
          >
            Food
          </button>

          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilterButton('Drinks') }
          >
            drink
          </button>
        </div>
        <div>
          {/* <FavoriteFoods /> */}
          <FavoriteDrinks />
        </div>
      </div>
    );
  }
}

export default FavoriteRecipes;
