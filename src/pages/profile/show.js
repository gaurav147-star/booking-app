import React, { useContext } from "react";
import "./show.scss";
import Image from "../../assets/me.jpg";
import { AuthContext } from "../../context/AuthContext";

const Show = () => {

  const { user } = useContext(AuthContext);
//   console.log(user);

  return (
    <div className="profile">
      <div className="showContainer">
        <div className="profile_img">
          <img src={Image} alt="" style={{ width: "300px" }} />
        </div>
        <div className="profile_details">
          <div className="showCont">
            <div className="showpcont">
              <span>Full Name</span>
              <input
                type="text"
                value={user.name}
                className="lInput"
                disabled
              />
            </div>
            <div className="showpcont">
              <span>Username</span>
              <input
                type="text"
                value={user.username}
                
                className="lInput"
                disabled
              />
            </div>
            <div className="showpcont">
              <span>Email</span>
              <input
                type="text"
                value={user.email}
                
                className="lInput"
                disabled
              />
            </div>

            <div className="showpcont">
              <span>Country</span>
              <input
                type="text"
                value={user.country}
                className="lInput"
                disabled
              />
            </div>
            <div className="showpcont">
              <span>City</span>
              <input
                type="text"
                value={user.city}
                
                className="lInput"
                disabled
              />
            </div>
            <div className="showpcont">
              <span>Phone Number</span>
              <input
                type="number"
                value={user.phone}
                className="lInput"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
