import { combineReducers } from 'redux';
import AuthReducer from './auth.R';
import BeerInfoReducer from './beer_info.R';
import GameInfoReducer from './game_info.R';

const rootReducer = combineReducers({
  userAuthInfo: AuthReducer,
  beers: BeerInfoReducer,
  gameInfo: GameInfoReducer,
});

export default rootReducer;
