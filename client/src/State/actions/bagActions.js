import axios from "axios";
import {
  ADD_TO_BAG_FAILURE,
  ADD_TO_BAG_REQUEST,
  ADD_TO_BAG_SUCCESS,
  GET_BAG_ITEMS_REQUEST,
  GET_BAG_ITEMS_SUCCESS,
  REMOVE_BAG_ITEMS_FAILURE,
  REMOVE_BAG_ITEMS_REQUEST,
  REMOVE_BAG_ITEMS_SUCCESS
} from "../actionTypes/bagActionTypes";

export const getBag = (userId, token) => (dispatch) => {
  dispatch({ type: GET_BAG_ITEMS_REQUEST });
  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/bag/${userId}`,
    method: "get",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: GET_BAG_ITEMS_SUCCESS, payload: res.data.bag });
    })
    .catch((err) => {
      dispatch({ type: GET_BAG_ITEMS_REQUEST });
    });
};

export const addBagItem = (token, bagItem) => (dispatch) => {
  dispatch({ type: ADD_TO_BAG_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/bag/add`,
    method: "post",
    data: bagItem,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: ADD_TO_BAG_SUCCESS, payload: res.data.bag });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_BAG_FAILURE });
    });
};

export const removeBagItem = (token, id) => (dispatch) => {
  dispatch({ type: REMOVE_BAG_ITEMS_REQUEST });

  return axios({
    url: `https://watch-hub-server.onrender.com/bag/remove/${id}`,
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: REMOVE_BAG_ITEMS_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_BAG_ITEMS_FAILURE });
    });
};
