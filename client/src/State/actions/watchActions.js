import axios from "axios";
import {
  GET_ALL_WATCHES_FAILURE,
  GET_ALL_WATCHES_REQUEST,
  GET_ALL_WATCHES_SUCCESS,
  GET_WATCHES_SUCCESS
} from "../actionTypes/watchActionTypes";

export const getWatches = (params) => (dispatch) => {
  dispatch({ type: GET_ALL_WATCHES_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/watch`, { params })
    .then((res) => {
      return dispatch({
        type: GET_ALL_WATCHES_SUCCESS,
        payload: res.data.watches
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_WATCHES_FAILURE });
    });
};

export const getReaminingWatches = (params) => (dispatch) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/watch`, { params })
    .then((res) => {
      return dispatch({
        type: GET_WATCHES_SUCCESS,
        payload: res.data.watches
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_WATCHES_FAILURE });
    });
};
