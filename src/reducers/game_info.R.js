import { FETCH_GAME_INFO, CLEAR_GAME_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GAME_INFO:
      let gameInfoObj = {
        addBeerPhase: action.payload[0],
        drinkPhase: action.payload[1],
        votePhase: action.payload[2],
      };
      return Object.assign({}, state, { gameInfo: gameInfoObj });
    case CLEAR_GAME_INFO:
      return Object.assign({}, state, { gameInfo: {} });
    default:
      return state;
  }
}
