import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DrinkCategory() {
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
    return <h2>Loading drink category</h2>;
  }

  return (
    <div>
      <h4
        data-testid="recipe-category"
        className="category-text"
      >
        { drinkDetails[0].strAlcoholic }
      </h4>

    </div>
  );
}

export default DrinkCategory;
