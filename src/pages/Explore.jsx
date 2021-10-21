import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, ButtonGroup } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Explore.css';

function Explore() {
  const history = useHistory();

  return (
    <div className="page-main">
      <Header titlePage="Explorar" />
      <div className="container">
        <ButtonGroup vertical>
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-food"
            onClick={ () => history.push('/explorar/comidas') }
          >
            Explorar Comidas
          </Button>
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-drinks"
            onClick={ () => history.push('/explorar/bebidas') }
          >
            Explorar Bebidas
          </Button>
        </ButtonGroup>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
