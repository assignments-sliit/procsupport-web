import api from "../utils/Api";
//import { setAlert } from "./Alert";
import { PO_ERROR, ADD_PO } from "./types";

// Add supplier
export const addPO = (formData) => async (dispatch) => {
  console.log(formData);

  try {
    const res = await api.post("/po/create", formData);

    dispatch({
      type: ADD_PO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PO_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.err.response.status,
      },
    });
  }
};
