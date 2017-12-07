import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCH_USER_DB_INFO,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_USER_AUTH_INFO,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { auth: action.payload, loggedIn: true });
    case REGISTER_FAIL:
      return Object.assign({}, state, { loggedIn: false });
    case FETCH_USER_DB_INFO:
      return Object.assign({}, state, { userDbInfo: action.payload });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { loggedIn: true });
    case LOGIN_FAIL:
      return Object.assign({}, state, { loggedIn: false });
    case SET_USER_AUTH_INFO:
      return Object.assign({}, state, { auth: action.payload, loggedIn: true });
    default:
      return state;
  }
}
