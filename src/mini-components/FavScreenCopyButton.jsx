import React, { useState } from 'react';

import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

function CopyButton({ recipe, index }) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  // No magic Numbers
  const oneSecondDisplayCopiedLink = 1000;

  const copiedUrlMessage = <p>Link copiado!</p>;

  return (
    <div>
      <button
        type="button"
        onClick={ () => {
          navigator
            .clipboard
            .writeText(
              `${window.location.origin}/${recipe.type}s/${recipe.id}`,
            );
          setCopiedUrl(true);
          setTimeout(() => setCopiedUrl(false), oneSecondDisplayCopiedLink);
        } }
        src={ shareIcon }
        data-testid={ `${index}-horizontal-share-btn` }
      >
        <img src={ shareIcon } alt="share button" />
      </button>
      {copiedUrl && copiedUrlMessage}
    </div>
  );
}

export default CopyButton;

CopyButton.propTypes = {
  recipe: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
