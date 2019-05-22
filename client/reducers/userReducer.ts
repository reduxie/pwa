import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    searchWord: string;
    // userLikes: any[];
}



const initialState: DataState = {
  searchWord: '',
  // userLikes: []
};

const userReducer = (state = initialState, action:Action) => {
  let searchWord: string; 
  // let userLikes: any[];
  switch (action.type) {

    case actionTypes.SAVE_SEARCH: 
      searchWord = action.payload
      return {
        ...state,
        searchWord
      }
    case actionTypes.GET_SEARCH_IMAGE:
      return {
          searchWord: ''
      } 
    // case actionTypes.LIKED_IMAGE: 
    //   userLikes = state.userLikes.slice(0);
    //   userLikes.push(action.payload);
    //   return {
    //     ...state,
    //     userLikes
    //   } 
    default:
      return state;
  }
};

export default userReducer;
 