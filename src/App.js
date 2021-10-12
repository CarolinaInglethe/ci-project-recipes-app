import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesAppProvider from './context/RecipesAppProvider';

import Login from './pages/Login';
import Food from './pages/Food';
import Drink from './pages/Drink';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrink from './pages/ExploreDrink';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import ExploreFoodByIngredient from './pages/ExploreFoodByIngredient';
import ExploreDrinkByIngredient from './pages/ExploreDrinkByIngredient';
import ExploreFoodByOrigin from './pages/ExploreFoodByOrigin';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipesAppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Food } />
          <Route exact path="/bebidas" component={ Drink } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFood } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodByIngredient }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinkByIngredient }
          />
          <Route
            exact
            path="/explorar/comidas/area"
            component={ ExploreFoodByOrigin }
          />
          <Route exact path="/comidas/:id" component={ FoodDetails } />
          <Route exact path="/bebidas/:id" component={ DrinkDetails } />
          <Route
            exact
            path="/bebidas/:id/in-progress"
            component={ DrinkInProgress }
          />
          <Route
            exact
            path="/comidas/:id/in-progress"
            component={ FoodInProgress }
          />

          <Route
            exact
            path="/receitas-feitas"
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/receitas-favoritas"
            component={ FavoriteRecipes }
          />
          <Route
            exact
            path="/perfil"
            component={ Profile }
          />
          <Route
            exact
            path="/explorar/bebidas/area"
            component={ NotFound }
          />
        </Switch>
      </BrowserRouter>
    </RecipesAppProvider>
  );
}

export default App;
