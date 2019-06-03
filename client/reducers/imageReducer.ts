import { actionTypes } from '../constants/actionTypes';

interface Action {
  type: string;
  payload: any;
}

interface ImageState {
  myImages: any[];
  searchImages: any[];
  modalToggle: any;
  modalURL: string;
}

const initialState: ImageState = {
  myImages: [],
  searchImages: [],
  modalToggle: false,
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
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalToggle: action.payload.modalToggle,
        modalURL: action.payload.modalURL,
      };
    case actionTypes.DROP_MODAL:
      return {
        ...state,
        modalToggle: false,
        modalURL: '',
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        searchImages: [],
      };
    default:
      return state;
  }
};

export default imageReducer;
