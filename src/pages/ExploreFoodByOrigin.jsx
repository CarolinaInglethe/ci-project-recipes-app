import React from 'react';
import HeaderWithSearchFood from '../components/HeaderWithSearchFood';
import Footer from '../components/Footer';

function ExploreFoodByOrigin() {
  return (
    <div>
      <HeaderWithSearchFood titlePage="Explorar Origem" />
      <div data-testid="explore-by-area">
        <p>ExploreFoodByOrigin</p>
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByOrigin;
