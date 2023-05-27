import api from "../utils/Api";
import { setAlert } from "./Alert";
import { PO_ERROR, ADD_PO } from "./types";

// Add PO
export const CreatePO = (formData) => async (dispatch) => {
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
        status: err.response.status,
      },
    });
  }
};


// Get all PRs
export const getPRList = () => async (dispatch) => {
  try {
    const res = await api.get("pr/get/approved/all");
    dispatch({
      //type: GET_USERS_SUCCESS,
      payload: res.data.purchase_requests,
    });
  } catch (err) {
    dispatch({
      //type: GET_USERS_FAIL,
    });
    dispatch(setAlert("Failed to get PR Id", "danger"));
  }
};
