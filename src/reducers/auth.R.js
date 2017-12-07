import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCH_USER_DB_INFO,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_USER_AUTH_INFO,
  CLEAR_USER_INFO,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { auth: action.payload, loggedIn: true });
    case REGISTER_FAIL:
      return Object.assign({}, state, { loggedIn: false });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { loggedIn: true });
    case LOGIN_FAIL:
      return Object.assign({}, state, { loggedIn: false });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { loggedIn: false });
    case LOGOUT_FAIL:
      return Object.assign({}, state, { loggedIn: true });
    case SET_USER_AUTH_INFO:
      return Object.assign({}, state, { auth: action.payload });
    case CLEAR_USER_INFO:
      return Object.assign({}, state, { auth: '' });
    case FETCH_USER_DB_INFO:
      return Object.assign({}, state, { userDbInfo: action.payload });
    default:
      return state;
  }
}
