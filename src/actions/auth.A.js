import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import firebase from 'firebase';
import db from '../startup/db_init';

// const createNewUser = () => {};

// const setUserDbInfo = () => {};

const fbRegister = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          // dispatch(createNewUser(email));
          // dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
          // dispatch(setUserDbInfo(email));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          // fetch info for this user and set in store
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: REGISTER_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

export { fbRegister };
