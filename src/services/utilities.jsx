const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) !== null
  ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];

// console.log(localFavoriteObject.id);

let favoriteTable = [];
// let savedRecipeId = '';

export function getFavoritesList(recipeInfo) {
  favoriteTable = [{
    id: recipeInfo.id,
    type: recipeInfo.type,
    area: recipeInfo.area,
    category: recipeInfo.category,
    alcoholicOrNot: recipeInfo.alcoholicOrNot,
    name: recipeInfo.name,
    image: recipeInfo.image,
    saved: recipeInfo.saved,
  }];
  // localFavorite.some((recipeFav) => console.log(recipeFav));

  if (!(localFavorite.some((recipeFav) => recipeFav.id === favoriteTable.id))) {
    const newFavoriteRecipes = [...localFavorite, favoriteTable];
    // console.log(localFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
  }
}

// export const handleFavorite = (isFavorite) => {
//   if (isFavorite === false) { // fazer uma lógica usando o some e o map para comparar o id atual com a lista de ids salvos para ver se fica true ou false
//     setIsFavorite(true);
//     localStorage.setItem('isFavorite', !isFavorite);
//     getFavoritesList(drinkInfo);
//   } else {
//     setIsFavorite(false);
//     localStorage.setItem('isFavorite', !isFavorite);
//     localStorage.removeItem('favoriteRecipes');
//   }
// };

export default function isLocalFavorite(
  localIsFavorite,
  setIsFavorite,
  drinkOrMeal,
  currentId,
) {
  // if (localFavorite) {
  //   savedRecipeId = favoriteTable[0].id;
  // } else {
  //   Boolean(savedRecipeId);
  //   savedRecipeId = false;
  // }

  switch (drinkOrMeal) {
  case 'drink':
    if (localIsFavorite === 'true' && !(localFavorite
      .some((recipeFav) => recipeFav.id === currentId))) {
      setIsFavorite(true);
      console.log(localFavorite);
    } else {
      setIsFavorite(false);
      console.log(localFavorite);
    }
    break;
  // case 'meal':
  //   // if (localIsFavorite === 'true') {
  //   //   setIsFavorite(true);
  //   //   console.log(localIsFavorite);
  //   // } else if (localIsFavorite === 'false') {
  //   //   setIsFavorite(false);
  //   //   console.log(localIsFavorite);
  //   // }
  //   break;
  default:
    break;
  }
}
