import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  FETCH_USER_DB_INFO,
} from './types';
import firebase from 'firebase';
import db from '../startup/db_init';

const fbRegister = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        // Creates a new user in the Firebase auth system
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          // Creates a new user in the Firestore db, users collection
          dispatch(createNewUser(user));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          // Uses UID to fetch user info from Firestore db and store in Redux store
          dispatch(fetchUserDbInfo(user));
          // TODO: fetch beer and gameinfo collections - fetchGameData
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
        bestVote: '',
        worstVote: '',
      })
      .then(function(userDocRef) {
        dispatch({ type: CREATE_NEW_USER_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: CREATE_NEW_USER_FAIL });
        console.error('Error creating new user: ', error);
      });
  };
};

// Fetch user data from Firestore and set locally in Redux store
// Data is updated in real time
const fetchUserDbInfo = ({ uid }) => {
  return dispatch => {
    const dbInfoDocRef = db.collection('users').doc(uid);

    dbInfoDocRef.onSnapshot(function(doc) {
      dispatch({ type: FETCH_USER_DB_INFO, payload: doc.data() });
    });
  };
};

export { fbRegister, createNewUser, fetchUserDbInfo };
