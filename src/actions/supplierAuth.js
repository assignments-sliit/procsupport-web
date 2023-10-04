import api from "../utils/Api";
import { setAlert } from "./Alert";


// supplier login
export const supplierLogin = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/suppliers/login", body);

    dispatch({
      //type: LOGIN_SUCCESS,
      payload: res.data,
    });

    //dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      //type: LOGIN_FAIL
    });
  }
};
