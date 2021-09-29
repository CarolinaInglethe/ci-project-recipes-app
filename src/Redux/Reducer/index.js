import { combineReducers } from 'redux';
import loginReducer from './login';
import filteredFoods from './filteredFoods';

const rootReducer = combineReducers({
  loginReducer,
  filteredFoods,
});

export default rootReducer;
