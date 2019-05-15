import * as types from '../constants/actionTypes';

export const getData = data => ({
  type: types.GET_DATA,
  payload: data,
});
