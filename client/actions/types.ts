import { actionTypes } from '../constants/actionTypes';

export interface ImageState {
  myImages: ImageObj[];
  searchImages: ImageResults[];
  modalToggle: boolean;
  modalURL: string;
}

export interface ImageObj {
  id: number;
  likes: number;
  previewURL: string;
  tags: string;
  webformatURL: string;
}

export interface ModalObj {
  modalURL: string;
  modalToggle: boolean;
}

export interface ImageResults {
  results: ImageObj[] | [];
}

export interface SaveSearch {
  type: actionTypes.SAVE_SEARCH;
  payload: string;
}

export interface GetSearchImage {
  type: actionTypes.GET_SEARCH_IMAGE;
  payload: ImageResults;
}

export interface GetProfile {
  type: actionTypes.GET_PROFILE;
  payload: ImageResults;
}

export interface LikedImage {
  type: actionTypes.LIKED_IMAGE;
  payload: ImageObj;
}

export interface DeleteImageAsync {
  type: actionTypes.DELETE_IMAGE;
  payload: ImageObj;
}

export interface LoginUser {
  type: actionTypes.LOGIN;
  payload: { userId: number; userName: string };
}

export interface LogoutUser {
  type: actionTypes.LOGOUT;
}

export interface SignupUser {
  type: actionTypes.SIGNUP;
  payload: { userId: number; userName: string };
}

export interface ToggleModal {
  type: actionTypes.TOGGLE_MODAL;
  payload: ModalObj;
}

export interface DropModal {
  type: actionTypes.DROP_MODAL;
}
