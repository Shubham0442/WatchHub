import {
  GET_WISHLIST_ITEMS_FAILURE,
  GET_WISHLIST_ITEMS_REQUEST,
  GET_WISHLIST_ITEMS_SUCCESS
} from "../actionTypes/wishlistActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  wishlist: []
};

export const wishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_WISHLIST_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_WISHLIST_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlist: payload
      };
    case GET_WISHLIST_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        wishlist: [],
        isError: true
      };
    default:
      return state;
  }
};
