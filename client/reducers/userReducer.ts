import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    searchWord: string;
    userLikes: any[];
    userId: number | undefined;
    userName: string | undefined;
}

const initialState: DataState = {
  searchWord: '',
  userLikes: [],
  userId: undefined,
  userName: undefined
};

const userReducer = (state = initialState, action:Action) => {
  let searchWord: string;
  let likes: any[];
  switch (action.type) {

    case actionTypes.SAVE_SEARCH:
      searchWord = action.payload
      return {
        ...state,
        searchWord
      }
    case actionTypes.GET_SEARCH_IMAGE:
      return {
          ...state,
          searchWord: ''
      }
    case actionTypes.LIKED_IMAGE:
      likes = state.userLikes.slice();
      likes.push(action.payload);
      return {
        ...state,
        userLikes: likes
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName
      }
    default:
      return state;
  }
};

export default userReducer;
