import api from "../utils/Api";
import { PR_ERROR, ADD_PR } from "./types";

// Add supplier
export const addPR = (formData) => async (dispatch) => {
  console.log(formData);

  try {
    const res = await api.post("/pr/create", formData);

    dispatch({
      type: ADD_PR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PR_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.err.response.status,
      },
    });
  }
};
