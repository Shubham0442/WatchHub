import {
  GET_BAG_ITEMS_FAILURE,
  GET_BAG_ITEMS_REQUEST,
  GET_BAG_ITEMS_SUCCESS
} from "../actionTypes/bagActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  bag: []
};

export const bagReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BAG_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_BAG_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bag: payload
      };
    case GET_BAG_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        bag: [],
        isError: true
      };
    default:
      return state;
  }
};
