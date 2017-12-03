import { combineReducers } from 'redux';
import AuthReducer from './auth.R';

const rootReducer = combineReducers({
  auth: AuthReducer,
  loggedIn: AuthReducer,
});

export default rootReducer;
