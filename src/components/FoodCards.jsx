// import React from 'react';
// import { Redirect } from 'react-router';
// // import Food from '../pages/Food';

// function FoodCards() {
//   const maxCardsLenght = 12;
//   const { filtredFoods } = useState([]);

//   if (filtredFoods === null || filtredFoods === undefined) {
//     return global.alert(
//       'Sinto muito, não encontramos nenhuma receita para esses filtros.',
//     );
//   }
//   if (filtredFoods === 1) {
//     return (
//       <Redirect to={ `/comidas/${filtredFoods.idMeal}` } />
//     );
//   }

//   return (
//     <div>
//       {filtredFoods.map(({ idMeal, strMealThumb, strMeal }, index) => (
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
