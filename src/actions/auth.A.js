import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  SET_USER_DB_INFO,
} from './types';
import firebase from 'firebase';
import db from '../startup/db_init';

const fbRegister = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch(createNewUser(user));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          dispatch(setUserDbInfo(user));
          // fetch beer and gameinfo collections - fetchGameData
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
      .doc(uid)
      .set({
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

// Fetch user data from Firestore and set locally in Redux store
const setUserDbInfo = ({ uid }) => {
  return dispatch => {
    var docRef = db.collection('users').doc(uid);

    docRef.onSnapshot(function(doc) {
      dispatch({ type: SET_USER_DB_INFO, payload: doc.data() });
    });
  };
};

export { fbRegister, createNewUser, setUserDbInfo };
