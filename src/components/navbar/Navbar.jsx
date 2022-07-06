import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import axiosInstance from "../../config";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [close, setClose] = useState(false);

  const admin = useSelector((state) => state.admin);
  useEffect(() => {}, [admin]);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    toast("Logout Successfully!");
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.clear();
      setClose(!close);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            {" "}
            <b>A</b>ron-<b>B</b>ookings
          </span>
        </Link>
        {user && !close ? (
          <div className="afterlogin">
            {admin === true ? (
              <Link className="user-admin" to="/admin">
                Admin
              </Link>
            ) : (
              ""
            )}
            <Link className="user-name" to={`/profile/${user.username}`}>
              <div>{user.name}</div>
            </Link>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleclick}>
              Login
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Navbar;
