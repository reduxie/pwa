import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  reducers: dataReducer,
});

export default reducers;
