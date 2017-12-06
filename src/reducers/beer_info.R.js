import { FETCH_BEER_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BEER_INFO:
      return Object.assign({}, state, { beers: action.payload });
    default:
      return state;
  }
}
