import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface ImageState {
    myImages: any[],
    searchImages: any[],
    user_id: number
}



const initialState: ImageState = {
    myImages: [],
    searchImages: [],
    user_id: 1
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
    default:
      return state;
  }

};

export default imageReducer;
 