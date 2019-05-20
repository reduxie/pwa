import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface ImageState {
    image: {
        myImages: any[],
        searchImages: any[],
    },
}



const initialState: ImageState = {
  image: {
      myImages: [],
      searchImages: []
  }
};

const imageReducer = (state = initialState, action:Action) => {
  let searchWord:string, searches: string[];
  switch (action.type) {
//     case actionTypes.SAVE_SEARCH: 
//       searchWord = action.payload
//       return {
//         ...state,
//         searchWord
//       }
    default:
      return state;
  }

};

export default imageReducer;
 