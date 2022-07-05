import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Stripbar.scss";

import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import axiosInstance from "../../config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Stripbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="backarrow">
            <ArrowBackIcon />
          </div>
        </Link>
        <div className="propsData">{props.data}</div>
      </div>
    </div>
  );
};

export default Stripbar;
