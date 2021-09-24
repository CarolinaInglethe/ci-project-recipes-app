import React from 'react';
import HeaderWithSearch from '../components/HeaderWithSearch';

function ExploreFoodByOrigin() {
  return (
    <div>
      <HeaderWithSearch titlePage="Explorar Origem" />
      <div data-testid="explore-by-area">
        <p>ExploreFoodByOrigin</p>
      </div>
    </div>
  );
}

export default ExploreFoodByOrigin;
