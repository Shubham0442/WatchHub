import {
  GET_ALL_WATCHES_FAILURE,
  GET_ALL_WATCHES_REQUEST,
  GET_ALL_WATCHES_SUCCESS,
  GET_WATCHES_SUCCESS
} from "../actionTypes/watchActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  watches: []
};

export const watchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_WATCHES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_WATCHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        watches: payload
      };
    case GET_ALL_WATCHES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        watches: []
      };
    case GET_WATCHES_SUCCESS: {
      const newArr = handleRemoveDuplicate(state?.watches, payload);
      console.log(newArr);
      return {
        ...state,
        isLoading: false,
        watches: [...state.watches, ...newArr]
      };
    }
    default:
      return state;
  }
};

const handleRemoveDup = (maxArr, minArr) => {
  let ids = [];

  for (let i = 0; i < maxArr.length; i++) {
    let current = maxArr[i];
    for (let j = 0; j < minArr.length; j++) {
      if (current?._id === minArr[j]?._id) {
        ids.push(minArr[j]?._id);
      }
    }
  }

  if (ids.length > 0) {
    let arr = minArr.filter((el) => !ids.includes(el?._id));
    return arr;
  }
  return minArr;
};

const handleRemoveDuplicate = (oldList, newList) => {
  if (oldList.length >= newList.length) {
    let maxArr = oldList;
    let minArr = newList;
    return handleRemoveDup(maxArr, minArr);
  } else {
    let maxArr = newList;
    let minArr = oldList;
    return handleRemoveDup(maxArr, minArr);
  }
};
