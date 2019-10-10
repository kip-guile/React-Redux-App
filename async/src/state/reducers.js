import * as types from './actionTypes';
// - rename the reducer, give it a unique name
// - export the reducer
// - make sure the reducer is a "pure" function
// - which takes state (slice) and an action
// - NO RANDOMNESS no uuid() no moment.js no Math.random()
// - and returns FRESH NEW STATE (slice)
// - we need a default parameter to supply the initial value for the slice
const initialValueCount = 0;
export function countReducer(count = initialValueCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}

const initialState = [];
export function reducer(state = initialState, action){
  switch(action.type){
    case types.ADD_DATA:
      return action.payload;
    default:
      return state;
  }
}