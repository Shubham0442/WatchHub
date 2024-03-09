import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS
} from "../actionTypes/authActionTypes";

export const signup = (userData) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/signup`, userData)
    .then((res) => {
      return dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_SIGNUP_FAILURE });
    });
};

export const login = (crid) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/login`, crid)
    .then((res) => {
      return dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: USER_LOGOUT });
};
