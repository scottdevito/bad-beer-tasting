import {
  FETCH_BEER_INFO,
  ADD_NEW_BEER_SUCCESS,
  ADD_NEW_BEER_FAIL,
} from './types';
import db from '../startup/db_init';

const fetchBeerInfo = () => {
  return dispatch => {
    const beerInfoDocRef = db.collection('beers');

    beerInfoDocRef.onSnapshot(function(querySnapshot) {
      var beers = [];
      querySnapshot.forEach(function(querySnapshot) {
        beers.push(querySnapshot.data());
      });
      dispatch({ type: FETCH_BEER_INFO, payload: beers });
    });
  };
};

// Add a new beer document in Firestore
const addNewBeer = ({ name, description }, email) => {
  return dispatch => {
    console.log(name, description, email);

    db
      .collection('beers')
      .add({
        beerId: '',
        name,
        description,
        bestVotes: 0,
        worstVotes: 0,
        owner: email,
      })
      .then(function(userDocRef) {
        dispatch({ type: ADD_NEW_BEER_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: ADD_NEW_BEER_FAIL });
        console.error('Error adding new beer: ', error);
      });
  };
};

export { fetchBeerInfo, addNewBeer };
