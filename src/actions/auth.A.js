import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  FETCH_USER_DB_INFO,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_USER_AUTH_INFO,
  CLEAR_USER_INFO,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';
import firebase from 'firebase';
import db from '../startup/db_init';
import { fetchBeerInfo } from './beer_info.A';
import { fetchGameInfo } from './game_info.A';

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
          // Fetch Beers collection
          dispatch(fetchBeerInfo());
          // Fetch Game Info collection
          dispatch(fetchGameInfo());
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

const fbLogin = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          // Set store variable loggedIn to true
          dispatch({ type: LOGIN_SUCCESS });
          // Store user info in the store under auth variable
          dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
          // Uses UID to fetch user info from Firestore db and store in Redux store
          dispatch(fetchUserDbInfo(user));
          // Fetch beers collection
          dispatch(fetchBeerInfo());
          // Fetch Game Info collection
          dispatch(fetchGameInfo());
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: LOGIN_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const fbLogout = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: CLEAR_USER_INFO });
          // Clear USERDBINFO
          // Clear GAMESINFO
          // Clear BEERSINFO
          dispatch({ type: LOGOUT_SUCCESS });
          resolve();
        })
        .catch(error => {
          dispatch({ type: LOGOUT_FAIL, payload: { error } });
          reject(error);
        });
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

export { fbRegister, createNewUser, fetchUserDbInfo, fbLogin, fbLogout };
