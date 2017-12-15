import { VOTES_SUBMIT_SUCCESS, VOTES_SUBMIT_FAIL } from './types';
import db from '../startup/db_init';

// Submit user's votes
const submitVotes = ({ selectedBeerIds }) => {
  return dispatch => {
    console.log(selectedBeerIds);
    // db
    //   .collection('users')
    //   .doc(uid)
    //   .update({
    //     beerId: newBeeruuid,
    //   })
    //   .then(function(userDocRef) {
    //     dispatch({ type: VOTES_SUBMIT_SUCCESS });
    //   })
    //   .catch(function(error) {
    //     dispatch({ type: VOTES_SUBMIT_FAIL });
    //     console.error('Error submitting votes: ', error);
    //   });
  };
};

export { submitVotes };
