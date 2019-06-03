import { actionTypes } from '../constants/actionTypes';

interface Action {
  type: string;
  payload: any;
}

interface DataState {
  searchWord: string;
  userLikes: any[];
  userId: number | null;
  userName: string | null;
}

const initialState: DataState = {
  searchWord: '',
  userLikes: [],
  userId: null,
  userName: null,
};

const userReducer = (state = initialState, action: Action) => {
  let searchWord: string;
  let likes: any[];
  switch (action.type) {
    case actionTypes.SAVE_SEARCH:
      searchWord = action.payload;
      return {
        ...state,
        searchWord,
      };
    case actionTypes.GET_SEARCH_IMAGE:
      return {
        ...state,
        searchWord: '',
      };
    case actionTypes.LIKED_IMAGE:
      likes = state.userLikes.slice();
      likes.push(action.payload);
      console.log('\n\npayload being delivered:\n\n', likes, action.payload);
      return {
        ...state,
        userLikes: likes,
      };
    case actionTypes.DELETE_IMAGE:
      const copiedState = state.userLikes.slice();
      for (let i = 0; state.userLikes.length; i++) {
        if (state.userLikes[i].id === action.payload.id) {
          copiedState.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        userLikes: copiedState,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userLikes: [],
        userId: null,
        userName: null,
      };
    case actionTypes.SIGNUP:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

export default userReducer;
