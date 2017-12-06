import { FETCH_BEER_INFO } from './types';
import db from '../startup/db_init';

const fetchBeerInfo = () => {
  return dispatch => {
    const beerInfoDocRef = db.collection('beers');

    beerInfoDocRef.onSnapshot(function(querySnapshot) {
      var beers = [];
      querySnapshot.forEach(function(querySnapshot) {
        beers.push(querySnapshot.data());
      });
      console.log(beers);
      dispatch({ type: FETCH_BEER_INFO, payload: beers });
    });
  };
};

export { fetchBeerInfo };
