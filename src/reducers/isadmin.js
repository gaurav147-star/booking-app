import { ISADMIN } from "../actionTypes";

const initialize = localStorage.getItem("isAdmin") === "true";
export const isAdminReducer = (state = initialize, action) => {
  switch (action.type) {
    case ISADMIN:
      return action.payload;
    default:
      return state;
  }
};
