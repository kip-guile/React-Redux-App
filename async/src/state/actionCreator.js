import axios from 'axios';
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

export function get_data() {
  return function(dispatch){
    axios.get(`https://breakingbadapi.com/api/quotes`)
    .then(response => {
      const quotes = response.data;
      dispatch({type: types.ADD_DATA, payload: quotes})
    })
  }
}
