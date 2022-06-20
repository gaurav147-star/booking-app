import axiosInstance from "../../config";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

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
      //   console.log(credentials);
      const res = await axiosInstance.post("/auth/login", credentials);
      //   console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
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
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div className="inpcont">
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
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
            Don't have any account? <Link className="loToSi" to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
