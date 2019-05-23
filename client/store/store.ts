import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import Reduxie from 'reduxie';

const store = createStore(
  Reduxie.OuterReducer(reducers),
  composeWithDevTools(applyMiddleware(thunk, Reduxie.Middleware('mrjbabys pinterest')))
);

export default store;

// Must combine reducer if we have end up having more than 1.
