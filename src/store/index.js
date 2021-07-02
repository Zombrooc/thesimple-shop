import { combineReducers, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import cart from './ducks/cart';

const reducers = combineReducers({
  cart,
});

const makeStore = (context) => createStore(reducers);

export const store = createWrapper(makeStore, {debug: false});