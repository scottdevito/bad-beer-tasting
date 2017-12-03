import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from './types';
import firebase from 'firebase';
import db from '../startup/db_init';

// const setUserDbInfo = () => {};

const fbRegister = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch(createNewUser(user));
          // dispatch(setUserDbInfo(user));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          // fetch info for this user and set in store
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: REGISTER_FAIL, payload: { error } });
          console.error(error);
          reject(error);
        });
    });
  };
};

// Create a new user document in Firestore
const createNewUser = ({ email, uid }) => {
  return dispatch => {
    db
      .collection('users')
      .add({
        email: email.toLowerCase(),
        beerId: '',
        admin: false,
        joinDate: new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, '/'),
        uid: uid,
      })
      .then(function(docRef) {
        dispatch({ type: CREATE_NEW_USER_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: CREATE_NEW_USER_FAIL });
        console.error('Error creating new user: ', error);
      });
  };
};

export { fbRegister, createNewUser };
