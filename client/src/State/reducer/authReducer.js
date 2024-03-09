import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../actionTypes/authActionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: null,
  user: {}
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload?.token,
        user: payload.user
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: true,
        token: null,
        user: {}
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: false,
        token: null,
        user: {}
      };
    default:
      return state;
  }
};
