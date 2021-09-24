import React from 'react';
import HeaderWithSearch from '../components/HeaderWithSearch';
import Footer from '../components/Footer';

function ExploreFoodByOrigin() {
  return (
    <div>
      <HeaderWithSearch titlePage="Explorar Origem" />
      <div data-testid="explore-by-area">
        <p>ExploreFoodByOrigin</p>
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByOrigin;
