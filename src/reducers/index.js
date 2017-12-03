import { combineReducers } from 'redux';
import AuthReducer from './auth.R';

const rootReducer = combineReducers({
  userAuthInfo: AuthReducer,
});

export default rootReducer;
