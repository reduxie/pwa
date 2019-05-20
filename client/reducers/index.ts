import { combineReducers } from 'redux';
import userReducer from './userReducer';
import imageReducer from './imageReducer';

const reducers = combineReducers({
  user: userReducer,
  image: imageReducer
});

export default reducers;
