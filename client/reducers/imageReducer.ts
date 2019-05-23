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
    searchImages: [],
};

const imageReducer = (state = initialState, action:Action) => {
  let searchImages;
  switch (action.type) {
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
        case actionTypes.DELETE_IMAGE:
            let copiedState = state.myImages.slice();
            for(let i = 0; state.myImages.length; i++) {
              if(state.myImages[i].id === action.payload.id) {
                copiedState.splice(i, 1);
                break;
              }
            }
            return {
              ...state,
              myImages: copiedState
            }
    default:
      return state;
  }

};

export default imageReducer;
