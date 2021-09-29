// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import FilteredFoodsAction from '../Redux/Actions/filteredFoodsAction';

// import './SearchBar.css';

// // estado da barra de pesquisa
// function SearchBarFood({ filteredFoodsRedux }) {
//   const [inputValue, setInputValue] = useState('');
//   const [radioValue, setRadioValue] = useState('');
//   const [filteredFoods, setFilteredFoods] = useState([]);

//   const handleSearchInput = ({ target }) => {
//     setInputValue(target.value);
//   };

//   const handleRadioInput = ({ target }) => {
//     setRadioValue(target.value);
//   };

//   useEffect(() => {
//     if (inputValue.length > 1 && radioValue === 'firstLetter') {
//       global.alert('Sua busca deve conter somente 1 (um) caracter');
//     }
//   }, [inputValue, radioValue]);

//   function handleClick() {
//     if (radioValue === 'ingredient') {
//       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
//         .then((response) => response.json())
//         .then((result) => setFilteredFoods(result.meals));
//     }

//     if (radioValue === 'name') {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
//         .then((response) => response.json())
//         .then((result) => setFilteredFoods(result.meals));
//     }

//     if (radioValue === 'firstLetter') {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
//         .then((response) => response.json())
//         .then((result) => setFilteredFoods(result.meals));
//     }
//   }
//   console.log(filteredFoods);

//   if (filteredFoods === null || filteredFoods === undefined) {
//     return global.alert(
//       'Sinto muito, não encontramos nenhuma receita para esses filtros.',
//     );
//   }

//   if (filteredFoods.length === 1) {
//     return (
//       <Redirect to={ `/comidas/${filteredFoods.idMeal}` } />
//     );
//   }

//   if (filteredFoods.lenght > 1) {
//     filteredFoodsRedux(filteredFoods);
//   }

//   return (
//     <div>
//       <div className="search-input">
//         <input
//           data-testid="search-input"
//           type="text"
//           name="search"
//           placeholder="Buscar Receita"
//           value={ inputValue }
//           onChange={ handleSearchInput }
//         />
//         <label htmlFor="ingredient-search">
//           <input
//             data-testid="ingredient-search-radio"
//             type="radio"
//             name="radioSelect"
//             value="ingredient"
//             onChange={ handleRadioInput }
//           />
//           Ingredientes
//         </label>
//         <label htmlFor="name-search">
//           <input
//             data-testid="name-search-radio"
//             type="radio"
//             name="radioSelect"
//             value="name"
//             onChange={ handleRadioInput }
//           />
//           Nome
//         </label>
//         <label htmlFor="first-letter-search">
//           <input
//             data-testid="first-letter-search-radio"
//             type="radio"
//             name="radioSelect"
//             value="firstLetter"
//             onChange={ handleRadioInput }
//           />
//           Primeira letra
//         </label>
//         <div className="search-button">
//           <button
//             data-testid="exec-search-btn"
//             type="button"
//             onClick={ handleClick }
//           >
//             Buscar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// SearchBarFood.propTypes = {
//   filteredFoodsRedux: PropTypes.func.isRequired };

// const mapDispatchToProps = (dispatch) => ({
//   filteredFoodsRedux: ({ foodCards }) => dispatch(FilteredFoodsAction({ foodCards })),
// });

// export default connect(null, mapDispatchToProps)(SearchBarFood);

// // Pesquisas:
// // https://github.com/tryber/sd-013-b-project-recipes-app/blob/main-group-9-searchHeader/src/components/SearchInput.js
// // https://eslint.org/docs/rules/no-unused-vars
