// import { combineReducers } from 'redux';
// import TestReducer from './test.R';

// const rootReducer = combineReducers({
//   test: TestReducer,
// });

// export default rootReducer;

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state,
});

export default rootReducer;
