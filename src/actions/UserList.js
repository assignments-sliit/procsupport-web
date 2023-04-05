import api from "../utils/Api";
import { setAlert } from "./Alert";
import {
  GET_USER_LIST,
  GET_USERS_LIST,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from "./types";

// Get all users for Admin view
export const getUserAccounts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });

  try {
    const res = await api.get("/admin/get/all");

    dispatch({
      type: GET_USERS_LIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
