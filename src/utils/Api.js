import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

// Create an instance of axios
const api = axios.create({
  baseURL: `https://procsupport-api.onrender.com/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
