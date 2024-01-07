import {
  USER_DELETE,
  USER_GET,
  USER_UPDATE,
} from "../actionTypes/user-actiontype";
import axiosInstance from "../config";


export const getAllUsers = () => async (dispatch) => {
  const auth = localStorage.getItem("token");
  const config = {
    headers: {
      "Contnet-Type": "application/json",
      "auth-token": auth,
    },
  };
  const { data } = await axiosInstance.get("/users/", config);
  
  dispatch({
    type: USER_GET,
    payload: data
  });
};

export const deleteUser = (id) => async (dispatch) => {
  const auth = localStorage.getItem("token");
  const config = {
    headers: {
      "Contnet-Type": "application/json",
      "auth-token": auth,
    },
  };
  const { data } = await axiosInstance.delete(
    `/users/${id}`,
    config
  );
 
  dispatch({
    type: USER_DELETE,
    payload: id,
  });
};

export const updateUser = (adminAccess, id) => async (dispatch) => {
  const auth = localStorage.getItem("token");
  // console.log(adminAccess);
  const config = {
    headers: {
      "Contnet-Type": "application/json",
      "auth-token": auth,
    },
  };
  const { data } = await axiosInstance.put(
    `/users/${id}`,
    {
      isAdmin:adminAccess
      
    },
    config
  );
  // console.log(data);
  dispatch({
    type: USER_UPDATE,
    payload: data,
  });
};
