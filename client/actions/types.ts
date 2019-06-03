import { actionTypes } from '../constants/actionTypes';

export interface ImageObj {
  id: number;
  likes: number;
  previewURL: string;
  tags: string;
  webformatURL: string;
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
//  export interface toggleModal   {
//     type: actionTypes.TOGGLE_MODAL,
//     payload: modalObj,
//   },
//  export interface DropModal: () => ({
//     type: actionTypes.DROP_MODAL,
//   }),
//  export interface LoginUser: (userId: number, userName: string) => ({
//     type: actionTypes.LOGIN,
//     payload: { userId, userName },
//   }),
//  export interface LogoutUser: () => ({
//     type: actionTypes.LOGOUT,
//   }),
//  export interface SignupUser: (userId: number, userName: string) => ({
//     type: actionTypes.SIGNUP,
//     payload: { userId, userName },
//   }),
