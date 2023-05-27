import api from "../utils/Api";
import { setAlert } from "./Alert";
import { ADD_MATERIAL_TYPE, ADD_MATERIAL_ITEM, POST_ERROR } from "./types";

// Add material type
export const addMaterialType = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/mt/new", formData);

    dispatch({
      type: ADD_MATERIAL_TYPE,
      payload: res.data,
    });

    dispatch(setAlert("Material type added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get all material types
export const getMaterialTypes = () => async (dispatch) => {
  try {
    const res = await api.get("/mt/get/all");
    dispatch({
      //type: GET_USERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      //type: GET_USERS_FAIL,
    });
    dispatch(setAlert("Failed to get material types", "danger"));
  }
};

// Add material item
export const addMaterialItem = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/material/add", formData);

    dispatch({
      type: ADD_MATERIAL_ITEM,
      payload: res.data,
    });

    dispatch(setAlert("Material items added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get all material items
export const getMaterialItems = () => async (dispatch) => {
  try {
    const res = await api.get("/material/auth/get/all");
    dispatch({
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      //type: GET_USERS_FAIL,
    });
    dispatch(setAlert("Failed to get material items", "danger"));
  }
};
