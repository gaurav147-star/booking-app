import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Stripbar.scss";

import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import axiosInstance from "../../config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Stripbar = (props) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="backarrow" onClick={handleBack}>
          <ArrowBackIcon sx={{ fontSize: 27 }} />
        </div>

        <div className="propsData">{props.data}</div>
      </div>
    </div>
  );
};

export default Stripbar;
