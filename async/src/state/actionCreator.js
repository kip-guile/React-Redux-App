import * as types from './actionTypes';

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF
export function increment() {
  return { type: types.INCREMENT };
}

export function decrement() {
  return { type: types.DECREMENT };
}
