import { combineReducer } from 'redux';
import { loginReducer } from './login';

const rootReducer = combineReducer({
  loginReducer,
});

export default rootReducer;
