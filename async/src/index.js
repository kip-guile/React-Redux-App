import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import App from './App';
import thunk from 'redux-thunk';

const monsterReducer = combineReducers({
    // the key is the real name for the slice
    count: reducers.countReducer,
    quotes: reducers.reducer,
    // todoList: reducers.todoListReducer
  });
  
  // feed the createStore the combined reducer (5)
  const store = createStore(
    monsterReducer,
    applyMiddleware(thunk)
  );

ReactDOM.render(<>
  <Provider store={store}>
  <App />
  </Provider>
</>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
