// import React, { useState } from 'react';
// import { Redirect } from 'react-router';
// // import Drink from '../pages/Drink';

// function DrinkCards() {
//   const maxCardsLenght = 12;
//   const { filtredDrinks } = useState([]);

//   if (filtredDrinks === null || filtredDrinks === undefined) {
//     return global.alert(
//       'Sinto muito, não encontramos nenhuma receita para esses filtros.',
//     );
//   }
//   if (filtredDrinks === 1) {
//     return (
//       <Redirect to={ `/bebidas/${filtredDrinks.idDrink}` } />
//     );
//   }

//   return (
//     <div>
//       {filtredDrinks.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
//         <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
//           <img
//             src={ strDrinkThumb }
//             alt={ strDrink }
//             data-testid={ `${index}-card-img` }
//           />
//           <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
//         </div>
//       )).slice(0, maxCardsLenght)}
//     </div>
//   );
// }

// export default DrinkCards;
