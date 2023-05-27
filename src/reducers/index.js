import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import listReducer from "./list";

export default combineReducers({
  alert,
  auth,
  listReducer,
});
