import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../../config";
import useFetch from "../../../hooks/useFetch";
import CustomizedTables from "../table";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../action/user-action";

const User = () => {
  // const { data, loading, error } = useFetch("/users");
  const UserReducer = useSelector((state) => state.UserReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  // console.log(UserReducer);
  return (
    <div className="Userdatatable">
      <CustomizedTables data={ UserReducer }/>
    </div>
  );
};

export default User;
