import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DrinkDetailsImage() {
  const [drinkDetails, setDrinkDetails] = useState([]);

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

  if ((!drinkDetails.length)) {
    return <h2>Loading image</h2>;
  }

  return (
    <div>
      <img
        src={ drinkDetails[0].strDrinkThumb }
        alt={ drinkDetails[0].strDrink }
        data-testid="recipe-photo"
        height="250px"
      />
      <h3 data-testid="recipe-title">{ drinkDetails[0].strDrink }</h3>
    </div>
  );
}

export default DrinkDetailsImage;
