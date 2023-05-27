import { GET_USERS_SUCCESS, GET_USERS_FAIL } from "../actions/types";

const initialState = {
  users: [],
  loading: true,
  error: null,
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    // Handle other actions
    default:
      return state;
  }
};

export default listReducer;
