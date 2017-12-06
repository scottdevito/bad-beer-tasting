import { combineReducers } from 'redux';
import AuthReducer from './auth.R';
import GameDataReducer from './game_data.R';

const rootReducer = combineReducers({
  userAuthInfo: AuthReducer,
  beers: GameDataReducer,
});

export default rootReducer;
