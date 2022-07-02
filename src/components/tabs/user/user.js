import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../../config";
import useFetch from "../../../hooks/useFetch";
import CustomizedTables from "../table";

const User = () => {
  // const { data, loading, error } = useFetch("/users");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/users/", {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, ["/users"]);

  return (
    <div className="Userdatatable">
      <CustomizedTables data={data} />
    </div>
  );
};

export default User;
