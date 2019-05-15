import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers/dataReducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// Must combine reducer if we have end up having more than 1.
