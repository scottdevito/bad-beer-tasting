import db from '../startup/db_init';
import { DATA_ADDED } from './types';

const testAction = () => {
  return dispatch => {
    db
      .collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });

    dispatch({
      type: DATA_ADDED,
    });
  };
};

export { testAction };
