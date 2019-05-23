import { actionTypes } from '../constants/actionTypes';

interface Action {
  type: string;
  payload: any;
}

interface ImageState {
  myImages: any[];
  searchImages: any[];
  user_id: number;
  modalBool: any;
  modalURL: string;
}

const initialState: ImageState = {
  myImages: [],
  searchImages: [],
  user_id: 1,
  modalBool: false,
  modalURL: '',
};

const imageReducer = (state = initialState, action: Action) => {
  let searchImages;
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        myImages: action.payload,
      };
    case actionTypes.GET_SEARCH_IMAGE:
      return {
        ...state,
        searchImages: action.payload,
      };
    case actionTypes.MODAL_BOOL:
      return {
        ...state,
        modalBool: action.payload.modalBool,
        modalURL: action.payload.modalURL,
      };
    case actionTypes.DROP_MODAL:
      return {
        ...state,
        modalBool: false,
        modalURL: '',
      };
    case actionTypes.DELETE_IMAGE:
      const copiedState = state.myImages.slice();
      for (let i = 0; state.myImages.length; i++) {
        if (state.myImages[i].id === action.payload.id) {
          copiedState.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        myImages: copiedState,
      };
    default:
      return state;
  }
};

export default imageReducer;
