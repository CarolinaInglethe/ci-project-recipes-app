export const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) !== null
  ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];

let favoriteTable = [];
export const drinks = []; // declared global variable
export const foods = []; // declared global variable
export const foodsPlusDrinks = []; // declared global variable

export function getFavoritesList(recipeInfo) {
  favoriteTable = {
    id: recipeInfo.id,
    type: recipeInfo.type,
    area: recipeInfo.area,
    category: recipeInfo.category,
    alcoholicOrNot: recipeInfo.alcoholicOrNot,
    name: recipeInfo.name,
    image: recipeInfo.image,
  };
  console.log('está salvo');
  const newFavoriteRecipes = [...localFavorite, favoriteTable];
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
}

export default function isLocalFavorite(
  localIsFavorite,
  setIsFavorite,
  currentId,
) {
  if (
    localIsFavorite === 'true'
    && localFavorite
      .some((savedRecipe) => savedRecipe.id === currentId)
  ) {
    setIsFavorite(true);
  } else {
    setIsFavorite(false);
  }
}
