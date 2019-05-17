import { actionTypes } from '../constants/actionTypes';


interface Action {
    type: string,
    payload: any
}

interface DataState {
    user: {
        avatar: string,
        collections: {
          imgId: number[],
          searches: any[],
          notifications: any[],
        },
      },
    image: {
        id: string,
        description: string,
    },
    display: any[],
     
}



const initialState: DataState = {
  user: {
    avatar: 'CHETB',
    collections: {
      imgId: [],
      searches: [],
      notifications: [],
    },
  },
  image: {
    id: '',
    description: '',
  },
  display: [],
};

const dataReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      console.log('this is the reducer');
      return {
          ...state
      };
    case actionTypes.SAVE_SEARCH: 
      

    default:
      return state;
  }
};

export default dataReducer;
 