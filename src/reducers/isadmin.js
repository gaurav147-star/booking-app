import { ISADMIN } from "../actionTypes";

const initialize = false;
export const isAdminReducer = (state = initialize, action) => {
  switch (action.type) {
    case ISADMIN:
      return action.payload;
    default:
      return state;
  }
};
