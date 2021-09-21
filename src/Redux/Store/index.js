import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

if (window.Cypress) {
  window.store = store;
}

export default store;
