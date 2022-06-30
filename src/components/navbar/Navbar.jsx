import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";
import Cookies from "js-cookie";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    Cookies.remove("access_token")
    navigate("/login");
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
        {user ? (
          <div className="afterlogin">
            <div className="user-name">{user.username}</div>
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
    </div>
  );
};

export default Navbar;
