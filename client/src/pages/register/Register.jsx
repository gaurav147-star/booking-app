import axiosInstance from "../../config";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    name: undefined,
    password: undefined,
    email: undefined,
    country: undefined,
    city: undefined,
    phone: undefined,
  });
  const [errusername, setErrusername] = useState(false);
  const [errsemail, setErrsemail] = useState(false);
  const [errsdis, setErrsdis] = useState("");
  useEffect(() => {
      setTimeout(() => {
        setErrusername(false);
    }, 5000);
  }, [errusername]);
  useEffect(() => {
      setTimeout(() => {
        setErrsemail(false);
    }, 5000);
  }, [errsemail]);
  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/register", credentials);
      // toast.success("You are registered successfully!");
      // console.log(res);
      navigate("/login");
    } catch (err) {
      // console.log(err.request.status);
      // console.log(err);
      if (err.request.status === 404) {
        setErrusername(true);
      }
      if (err.request.status === 405) {
        setErrsemail(true);
      }
    }
  };
  return (
    <div className="register">
      <div className="rContainer">
        <p>Sign Up</p>
        <div className="rCont">
          <div className="inpcont">
            <span>Full Name</span>
            <input
              type="text"
              placeholder="full name"
              id="name"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div className="inpcont">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            {errusername && <span className="err">Username already exists</span>}
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
            {errsemail&& <span className="err">Email already exists</span>}
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
            Already have an account?{" "}
            <Link className="loToSi" to="/login">
              Sign In
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

export default Register;
