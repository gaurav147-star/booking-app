import React, { useContext, useState, useEffect } from "react";
import "./show.scss";
import Image from "../../assets/me.jpg";
import { AuthContext } from "../../context/AuthContext";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axiosInstance from "../../config";

const Show = () => {
  const { user } = useContext(AuthContext);
  const [updatedData, setUpdatedData] = useState(user);
  const id = user._id;
  const auth = localStorage.getItem("token");

  const getUpdate = async () => {
    const config = {
      headers: {
        "Contnet-Type": "application/json",
        "auth-token": auth,
      },
    };

    const { data } = await axiosInstance.get(`/users/${id}`, config);
    setUpdatedData(data);
  };

  useEffect(() => {
    getUpdate();
  }, []);
  // console.log(updatedData.name);
  const [credentials, setCredentials] = useState({
    username: updatedData.username,
    name: updatedData.name,
    email: updatedData.email,
    country: updatedData.country,
    city: updatedData.city,
    phone: updatedData.phone,
  });
  // console.log(credentials);
  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState(false);
  //   console.log(user);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // console.log(credentials);
  const handleClick = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    setEdit(!edit);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);

    data.append("upload_preset", "upload");
    try {
      let url = updatedData.img;
      if (file !== null) {
        const uploadRes = await axiosInstance.post(
          "https://api.cloudinary.com/v1_1/djn1nfuky/image/upload",
          data
        );
        url = uploadRes.data.url;
      }

      const auth = localStorage.getItem("token");
      // console.log(adminAccess);
      const config = {
        headers: {
          "Contnet-Type": "application/json",
          "auth-token": auth,
        },
      };

      const d = await axiosInstance.put(
        `/users/${id}`,
        {
          ...credentials,
          img: url,
        },
        config
      );
      localStorage.setItem("user", JSON.stringify(d.data));
    } catch (err) {
      console.log(err);
    }
    setEdit(!edit);
  };

  return (
    <div className="profile">
      <form action="">
        <div className="showContainer">
          <div className="profile_img">
            {edit && (
              <div className="formInput" style={{ marginTop: "10px" }}>
                <label
                  htmlFor="file"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  <span> Image: </span>
                  <DriveFolderUploadOutlinedIcon
                    style={{ paddingLeft: "10px" }}
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            )}
            <img
              // src={file ? URL.createObjectURL(file) : Image}
              src={file ? URL.createObjectURL(file) : updatedData.img}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="profile_details">
            <div className="showCont">
              <div className="showpcont">
                <span>Full Name</span>
                <input
                  type="text"
                  value={credentials.name}
                  id="name"
                  className="lInput"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="showpcont">
                <span>Username</span>
                <input
                  type="text"
                  value={credentials.username}
                  id="username"
                  className="lInput"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="showpcont">
                <span>Email</span>
                <input
                  type="text"
                  value={credentials.email}
                  id="email"
                  className="lInput"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>

              <div className="showpcont">
                <span>Country</span>
                <input
                  type="text"
                  value={credentials.country}
                  id="country"
                  className="lInput"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="showpcont">
                <span>City</span>
                <input
                  type="text"
                  id="city"
                  value={credentials.city}
                  className="lInput"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="showpcont">
                <span>Phone Number</span>
                <input
                  type="number"
                  value={credentials.phone}
                  className="lInput"
                  id="phone"
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="showpcont">
                {edit ? (
                  <button onClick={handleUpdate} className="lButton">
                    Update profile
                  </button>
                ) : (
                  <button onClick={handleClick} className="lButton">
                    Edit profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Show;
