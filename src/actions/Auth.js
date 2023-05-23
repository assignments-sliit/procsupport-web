import api from "../utils/Api";
import { setAlert } from "./Alert";

import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register a new user
export const addUser = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users/create", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
