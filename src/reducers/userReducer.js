import {
    USER_DELETE,
    USER_GET,
    USER_UPDATE,
  } from "../actionTypes/user-actiontype";
  const initial = {
    users: [],
  };
  
  export const UserReducer = (state = initial, action) => {
    switch (action.type) {
      case USER_GET:
        return { ...state, users: action.payload };
      case USER_DELETE:
        const contactFilter = state.users.filter((contact) =>
          contact._id === action.payload ? null : contact
        );
        state = contactFilter;
        return { users: [...state] };
      case USER_UPDATE:
        const contactUpdate = state.users.filter((contact) =>
          contact._id === action.payload._id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        console.log(contactUpdate);
        return { users: state };
      default:
        return state;
    }
  };
  