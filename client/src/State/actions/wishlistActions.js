import axios from "axios";
import {
  ADD_TO_WISHLIST_FAILURE,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  GET_WISHLIST_ITEMS_FAILURE,
  GET_WISHLIST_ITEMS_REQUEST,
  GET_WISHLIST_ITEMS_SUCCESS,
  REMOVE_WISHLIST_ITEMS_FAILURE,
  REMOVE_WISHLIST_ITEMS_REQUEST,
  REMOVE_WISHLIST_ITEMS_SUCCESS
} from "../actionTypes/wishlistActionTypes";

export const getWishlist = (userId, token) => (dispatch) => {
  dispatch({ type: GET_WISHLIST_ITEMS_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/wishlist/${userId}`,
    method: "get",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({
        type: GET_WISHLIST_ITEMS_SUCCESS,
        payload: res.data.wishlist
      });
    })
    .catch((err) => {
      dispatch({ type: GET_WISHLIST_ITEMS_FAILURE });
    });
};

export const addWishlistItem = (token, wishlistItem) => (dispatch) => {
  console.log(token, wishlistItem);
  
  dispatch({ type: ADD_TO_WISHLIST_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/wishlist/add`,
    method: "POST",
    data: wishlistItem,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: ADD_TO_WISHLIST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_WISHLIST_FAILURE });
    });
};

export const removeWishlistItem = (token, id) => (dispatch) => {
  dispatch({ type: REMOVE_WISHLIST_ITEMS_REQUEST });

  return axios({
    url: `https://watch-hub-server.onrender.com/wishlist/remove/${id}`,
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: REMOVE_WISHLIST_ITEMS_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_WISHLIST_ITEMS_FAILURE });
    });
};
