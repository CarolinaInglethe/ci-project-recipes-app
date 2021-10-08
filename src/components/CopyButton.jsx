import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import loading from '../images/loading.gif';

function CopyButton() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // No magic Numbers
  const oneSecondDisplayCopiedLink = 1000;

  const copiedUrlMessage = <p>Link copiado!</p>;

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
    return <img src={ loading } alt="loading" />;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), oneSecondDisplayCopiedLink);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleCopy }
      >
        <img src={ shareIcon } alt="share button" />
      </button>
      {copiedUrl && copiedUrlMessage}
    </div>
  );
}

export default CopyButton;
