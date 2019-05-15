import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/dateReducer';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducer, composeWithDevTools());

export default store;
