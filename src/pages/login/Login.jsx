import axiosInstance from "../../config";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isadmin } from "../../action";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials, {
        withCredentials: true,
      });

      localStorage.setItem("token", res.data.token);
      isadmin(res.data.isAdmin);
      localStorage.setItem("isAdmin", res.data.isAdmin);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      toast("Invalid Credentials!");
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <p>Login</p>
        <div className="lCont">
          <div className="inpcont">
            <span>Username</span>
            <input
              type="text"
              placeholder="enter a username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            {/* {errusername && <span className="err">Username not exists</span>} */}
          </div>
          <div className="inpcont">
            <span>Password</span>
            <input
              type="password"
              placeholder="enter a password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
          <div className="dd">
            {" "}
            Don't have any account?{" "}
            <Link className="loToSi" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
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

export default Login;
