import React, { useState } from 'react';

import shareIcon from '../images/shareIcon.svg';

function CopyButton() {
  const [copiedUrl, setCopiedUrl] = useState(false);

  // No magic Numbers
  const oneSecondDisplayCopiedLink = 1000;

  const copiedUrlMessage = <p>Link copiado!</p>;

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
