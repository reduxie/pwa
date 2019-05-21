import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface ImageState {
    myImages: any[],
    searchImages: any[],
}



const initialState: ImageState = {
    myImages: [],
    searchImages: []
};

const imageReducer = (state = initialState, action:Action) => {
  let searchImages;
  switch (action.type) {
//     case actionTypes.SAVE_SEARCH: 
//       searchWord = action.payload
//       return {
//         ...state,
//         searchWord
//       }
        case actionTypes.GET_PROFILE: 
            return {
                ...state,
                myImages: action.payload
            }
        case actionTypes.GET_SEARCH_IMAGE:
            return {
                ...state,
                searchImages: action.payload
            } 
    default:
      return state;
  }

};

export default imageReducer;
 