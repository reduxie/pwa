import { actionTypes } from '../constants/actionTypes';

export const actions = {
    saveSearch: (data: string) => {actionTypes.SAVE_SEARCH, data},
    saveImage: (image: any) => {actionTypes.SAVE_IMAGE, image},
}
// export const getData = data => ({
//   type: types.GET_DATA,
//   payload: data,
// });

// export const saveSearch = data => ({
//   type: types.SAVE_SEARCH,
//   payload: data,
// });

// export const saveImage = data => ({
//   type: types.SAVE_IMAGE,
//   payload: data,
// });

// export const addToCollection = data => ({
//   type: types.ADD_TO_COLLECTION,
//   payload: data,
// });
