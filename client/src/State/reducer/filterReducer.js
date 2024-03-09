import {
  UPDATE_BRAND,
  UPDATE_CATEGORY,
  UPDATE_GENDER,
  UPDATE_RATING,
  UPDATE_SORT
} from "../actionTypes/filterActionTypes";

const initState = {
  brand: [],
  category: [],
  gender: [],
  sort: ""
};

export const filterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_BRAND:
      return {
        ...state,
        brand: payload
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: payload
      };
    case UPDATE_GENDER:
      return {
        ...state,
        gender: payload
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: payload
      };
    default:
      return state;
  }
};
