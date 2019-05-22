import { Dispatch } from 'redux';
import { actionTypes } from '../constants/actionTypes';

export const actions = {
  saveSearch: (data: string) => ({
    type: actionTypes.SAVE_SEARCH,
    payload: data,
  }),
  // addSearch: (data: string) => ({type: actionTypes.ADD_SEARCH, payload: data}),
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
  })
  // saveImage: (image: any) => ({actionTypes.SAVE_IMAGE, image}),
};

export const getSearchImageAsync = (searchWord:string) => {
    // console.log('inside getsearchimageasync', searchWord)
    return function(dispatch: Dispatch) {
        return fetch('http://localhost:3000/searchImages', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"image": searchWord})
        })
        .then(response => response.json())
        .then(response => {
            console.log("this is the response from server", response)
            dispatch(actions.getSearchImage(response))
        })
    }
}

export const getProfileAsync = (userId: number) => {
    console.log('inside the getprofile async', userId)
    return function(dispatch: Dispatch) {
        return fetch(`http://localhost:3000/getDbImages?userId=${userId}`, {
            method: "GET",
            headers: {"content-type": "application/json"},
        })
        .then(response => response.json())
        .then(response => {
            // console.log("this is the response from server", response)
            dispatch(actions.getProfile(response))
        })
    }
}

export const getLikedImageAsync = (image: any) => {
  // console.log('inside getsearchimageasync', searchWord)
  console.log('this is the image', image)
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

