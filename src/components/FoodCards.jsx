// import React from 'react';
// import { Redirect } from 'react-router-dom';
// // import Food from '../pages/Food';

// function FoodCards() {
//   const maxCardsLenght = 12;
//   const [filteredFoods] = useState([]);
//   const { idMeal, strMealThumb, strMeal } = filteredFoods;

//   if (filteredFoods === null || filteredFoods === undefined) {
//     return global.alert(
//       'Sinto muito, não encontramos nenhuma receita para esses filtros.',
//     );
//   }
//   if (filteredFoods.lenght === 1) {
//     return (
//       <Redirect to={ `/comidas/${filteredFoods.idMeal}` } />
//     );
//   }

//   return (
//     <div>
//       {filteredFoods.map((meal, index) => (
//         <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
//           <img
//             src={ strMealThumb }
//             alt={ strMeal }
//             data-testid={ `${index}-card-img` }
//           />
//           <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
//         </div>
//       )).slice(0, maxCardsLenght)}
//     </div>
//   );
// }

// export default FoodCards;
