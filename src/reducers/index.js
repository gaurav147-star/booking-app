import { combineReducers } from "redux";
import { isAdminReducer } from "./isadmin";
import { UserReducer } from "./userReducer";
const reducers = combineReducers({
  admin: isAdminReducer,
  UserReducer: UserReducer,
});
export default reducers;
