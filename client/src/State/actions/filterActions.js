import {
  UPDATE_BRAND,
  UPDATE_CATEGORY,
  UPDATE_GENDER,
  UPDATE_SORT
} from "../actionTypes/filterActionTypes";

export const updateBrand = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_BRAND, payload });
};

export const updateCategory = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY, payload });
};

export const updateGender = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_GENDER, payload });
};

export const updateSort = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_SORT, payload });
};
