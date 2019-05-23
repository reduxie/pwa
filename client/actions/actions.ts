import { Dispatch } from 'redux';
import { actionTypes } from '../constants/actionTypes';

export const actions = {
  saveSearch: (data: string) => ({
    type: actionTypes.SAVE_SEARCH,
    payload: data,
  }),
  getSearchImage: (images: any[]) => ({
    type: actionTypes.GET_SEARCH_IMAGE,
    payload: images,
  }),
  getProfile: (images: any[]) => ({
    type: actionTypes.GET_PROFILE,
    payload: images,
  }),
  likedImage: (image: any) => ({
    type: actionTypes.LIKED_IMAGE,
    payload: image,
  }),
  deleteImage: (image: any) => ({
    type: actionTypes.DELETE_IMAGE,
    payload: image,
  }),
  loginUser: (userId: number, userName: string) => ({
    type: actionTypes.LOGIN,
    payload: {userId, userName}
  }),
  signupUser: (userId: number, userName: string) => ({
    type: actionTypes.SIGNUP,
    payload: {userId, userName}
  })
};

export const getSearchImageAsync = (searchWord:string) => {
    return function(dispatch: Dispatch) {
        return fetch('http://localhost:3000/searchImages', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"image": searchWord})
        })
        .then(response => response.json())
        .then(response => {
            dispatch(actions.getSearchImage(response))
        })
    }
}

export const getProfileAsync = (userId: number) => {
    return function(dispatch: Dispatch) {
        return fetch(`http://localhost:3000/getDbImages?userId=${userId}`, {
            method: "GET",
            headers: {"content-type": "application/json"},
        })
        .then(response => response.json())
        .then(response => {
            dispatch(actions.getProfile(response))
        })
    }
}

export const getLikedImageAsync = (image: any) => {
  return function(dispatch: Dispatch) {
      return fetch('http://localhost:3000/addImageToFavsTable', {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({image})
      })
      .then(() => {
          dispatch(actions.likedImage(image))
      })
  }
}

export const deleteImageAsync = (image: any) => {
  return function(dispatch: Dispatch) {
      return fetch('http://localhost:3000/removeImageFromFavTable', {
          method: "DELETE",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({image})
      })
      .then(() => {
          dispatch(actions.deleteImage(image))
      })
  }
}

export const loginUserAsync = (userName: string, pw: string) => {
  return function(dispatch: Dispatch) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({userName, pw})
    })
    .then(response => response.json())
    .then(response => {
      //if response status is 200
      console.log(response);
      dispatch(actions.loginUser(response.userId, response.userName));
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const signupUserAsync = (userName: string, pw: string) => {
  return function(dispatch: Dispatch) {
    return fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({userName, pw})
    })
    .then(response => response.json())
    .then(response => {
      //if response status is 200
      console.log(response);
      dispatch(actions.signupUser(response.userId, response.userName));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
