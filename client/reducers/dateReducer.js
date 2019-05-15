import * as types from '../constants/actionTypes';

const initialState = {
  user: {
    avatar: '',
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
      return {};

    default:
      return state;
  }
};

export default dataReducer;
