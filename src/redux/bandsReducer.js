import {GET_BANDS, GET_BANDS_FAIL, GET_BANDS_SUCCESS} from './actionCreators';

const initialState = {
  albums: [],
  error: null,
  isLoading: false
};

export const bandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANDS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        isLoading: false
      };
    case GET_BANDS:
      return {
        ...state,
        isLoading: true
      };
    case GET_BANDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
