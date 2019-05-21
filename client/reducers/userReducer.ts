import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    searchWord: string
}



const initialState: DataState = {
  searchWord: ''
};

const userReducer = (state = initialState, action:Action) => {
  let searchWord:string;
  switch (action.type) {
    // case actionTypes.GET_DATA:
    //   console.log('this is the reducer');
    //   return {
    //       ...state
    //   };
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

    // case actionTypes.ADD_SEARCH: 
    //   searches = state.user.collections.searches.slice();
    //   searches.push(state.searchWord);
    //   return {
    //     ...state,
    //     collections: {
    //       ...state.user.collections,
    //       searches: searches
    //     },
    //     searchWord: ''
    //   }

    default:
      return state;
  }
};

export default userReducer;
 