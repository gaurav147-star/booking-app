import { combineReducers } from "redux";
import { isAdminReducer } from "./isadmin";
const reducers = combineReducers({
  admin: isAdminReducer,
});
export default reducers;
