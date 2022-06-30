import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    Cookies.remove("access_token");
    setClose(true);
    navigate("/");
    toast("Logout Successfully!");
  };
  // useEffect(() => {
  //   toast("Login Successfully!");
  // }, [user]);
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
            <div className="user-name">{user.name}</div>
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
