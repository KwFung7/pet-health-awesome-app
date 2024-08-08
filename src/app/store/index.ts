import {applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import RootReducer from '../reducers/index';

const middlewares = [thunk];

if (__DEV__) {
  const {logger} = require('redux-logger');

  middlewares.push(logger);
}

const store = createStore(
  RootReducer,
  undefined,
  applyMiddleware(...middlewares),
);
export default store;
