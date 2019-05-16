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

interface Action {
  type: string,
  payload: any
}

const dataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.GET_DATA:
      console.log('this is the reducer');
      return {};

    default:
      return state;
  }
};

export default dataReducer;
