import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import isLocalFavorite, {
  getFavoritesList,
} from '../services/utilities';

import isNotFavoriteIcon from '../images/whiteHeartIcon.svg';
import isFavoriteIcon from '../images/blackHeartIcon.svg';

function FavoriteButton() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

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
      'drink',
      id,
    );
  }, [localIsFavorite, id]);

  if ((!drinkDetails.length)) {
    return <h2>Loading favorite button</h2>;
  }

  const drinkInfo = {
    id: drinkDetails[0].idDrink,
    type: 'drink',
    area: '',
    category: drinkDetails[0].strCategory,
    alcoholicOrNot: drinkDetails[0].strAlcoholic,
    name: drinkDetails[0].strDrink,
    image: drinkDetails[0].strDrinkThumb,
    saved: !isFavorite,
  };

  const handleFavorite = () => {
    if (isFavorite === false) { // fazer uma lógica usando o some e o map para comparar o id atual com a lista de ids salvos para ver se fica true ou false
      setIsFavorite(true);
      localStorage.setItem('isFavorite', !isFavorite);
      getFavoritesList(drinkInfo);
    } else {
      setIsFavorite(false);
      localStorage.setItem('isFavorite', !isFavorite); // teste de commit
      localStorage.removeItem('favoriteRecipes'); // vai ter que usar uma lógica pra remover apenas o item do array no local storage
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavorite }
      >
        {
          isFavorite
            ? <img src={ isFavoriteIcon } alt="Like button" />
            : <img src={ isNotFavoriteIcon } alt="Like button" />
        }
      </button>
    </div>
  );
}

export default FavoriteButton;
