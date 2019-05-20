import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    user: {
        avatar: string,
        collections: {
          imgId: number[],
          searches: any[],
          notifications: any[],
        },
      },
    image: {
        id: string,
        description: string,
    },
    display: any[],
    searchWord: string
}



const initialState: DataState = {
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
  searchWord: ''
};

const dataReducer = (state = initialState, action:Action) => {
  let searchWord:string, searches: string[];
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

    case actionTypes.ADD_SEARCH: 
      searches = state.user.collections.searches.slice(0);
      searches.push(state.searchWord);
      return {
        ...state,
        searches,
        searchWord: ''
      }

    default:
      return state;
  }
};

export default dataReducer;
 