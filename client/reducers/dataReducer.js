import * as types from '../constants/actionTypes';

const initialState = {
  user: {
    avatar: 'CHETB',
    collections: {
      imgId: [],
      searches: [],
      notifications: [],
    },
  },
  image: {
    id: '',
    description: '',
  },
  display: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      console.log('this is the reducer');
      return {};

    default:
      return state;
  }
};

// const reducers = combineReducers({
//   // if we had other reducers, they would go here
//   markets: marketsReducer,
// });

export default dataReducer;
