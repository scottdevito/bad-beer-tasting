import { REGISTER_SUCCESS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { auth: action.payload, loggedIn: true });
    default:
      return state;
  }
}
