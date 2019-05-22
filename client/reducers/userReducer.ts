import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    searchWord: string;
    userLikes: any[];
}

const initialState: DataState = {
  searchWord: '',
  userLikes: []
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
    
    console.log('we are inside the reducer')
      likes = state.userLikes.slice();
      likes.push(action.payload);
      return {
        ...state,
        userLikes: likes
      } 
    default:
      return state;
  }
};

export default userReducer;
 