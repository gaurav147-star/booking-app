import axiosInstance from "../../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    country: undefined,
    city: undefined,
    phone: undefined,
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/register", credentials);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="rContainer">
        <p>Sign Up</p>
        <div className="rCont">
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
            <span>Email</span>
            <input
              type="text"
              placeholder="email"
              id="email"
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
          <div className="inpcont">
            <span>Country</span>
            <input
              type="text"
              placeholder="country"
              id="country"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div className="inpcont">
            <span>City</span>
            <input
              type="text"
              placeholder="city"
              id="city"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div className="inpcont">
            <span>Phone Number</span>
            <input
              type="number"
              placeholder="phone number"
              id="phone"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <button onClick={handleClick} className="lButton">
            Sign Up
          </button>

          <div className="dd">
            {" "}
            Already hav any account?{" "}
            <Link className="loToSi" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
