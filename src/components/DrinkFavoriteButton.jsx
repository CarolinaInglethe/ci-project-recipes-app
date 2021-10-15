import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import isLocalFavorite, {
  getFavoritesList,
  localFavorite,
} from '../services/utilities';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import loading from '../images/loading.gif';

function FavoriteButton() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [clickOn, setClickOn] = useState(false);

  const { id } = useParams();

  // Fetch para detalhes de uma receita
  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await response.json();

      setDrinkDetails(drinks);
    };
    fetchDrinks();
  }, [id]);

  const localIsFavorite = localStorage.getItem('isFavorite');

  useMemo(() => {
    isLocalFavorite(
      localIsFavorite,
      setIsFavorite,
      id,
    );
  }, [localIsFavorite, id]);

  if ((!drinkDetails.length)) {
    return <img src={ loading } alt="loading" />;
  }

  const drinkInfo = {
    id: drinkDetails[0].idDrink,
    type: 'bebida',
    area: '',
    category: drinkDetails[0].strCategory,
    alcoholicOrNot: drinkDetails[0].strAlcoholic,
    name: drinkDetails[0].strDrink,
    image: drinkDetails[0].strDrinkThumb,
  };

  const recipeOnStorage = localFavorite.some((savedRecipe) => savedRecipe.id === id);

  let index = '';
  let updateStorage = '';

  const handleFavorite = () => {
    if (recipeOnStorage === false) { // fazer uma lógica usando o some e o map para comparar o id atual com a lista de ids salvos para ver se fica true ou false
      setIsFavorite(true);
      localStorage.setItem('isFavorite', !isFavorite);
      getFavoritesList(drinkInfo);
      setClickOn(false);
    } else {
      setIsFavorite(false);
      localFavorite.forEach((recipe) => {
        if (recipe.id === id) {
          index = localFavorite.indexOf(recipe);
          localFavorite.splice(index, 1);
          updateStorage = JSON.stringify(localFavorite);
          localStorage.setItem('favoriteRecipes', updateStorage);
        }
        setClickOn(false);
      });
    }
    window.location.reload();
  };

  return (
    <div>
      <Button
        variant="outline-secondary"
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavorite }
        src={
          recipeOnStorage || clickOn
            ? blackHeartIcon
            : whiteHeartIcon
        }
      >
        {
          recipeOnStorage || clickOn
            ? <img src={ blackHeartIcon } alt="Like button" />
            : <img src={ whiteHeartIcon } alt="Like button" />
        }
      </Button>
    </div>
  );
}

export default FavoriteButton;
