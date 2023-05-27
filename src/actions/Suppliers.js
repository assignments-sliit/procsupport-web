import api from "../utils/Api";
import { setAlert } from "./Alert";
import { SUPPLIER_ERROR, ADD_SUPPLIER } from "./types";

// Add supplier
export const addSupplier = (formData) => async (dispatch) => {
  console.log(formData);

  try {
    const res = await api.post("/suppliers/create", formData);

    dispatch({
      type: ADD_SUPPLIER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUPPLIER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.err.response.status,
      },
    });
  }
};

// Get all suppliers
export const getSuppliers = () => async (dispatch) => {
  try {
    const res = await api.get("/suppliers/get/all");
    dispatch({
      //type: GET_USERS_SUCCESS,
      payload: res.data.records,
    });
  } catch (err) {
    dispatch({
      //type: GET_USERS_FAIL,
    });
    dispatch(setAlert("Failed to get users", "danger"));
  }
};
