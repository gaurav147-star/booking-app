import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import "./checkin.scss";
import Dialoag from "./dialoag";
import DraggableDialog from "./dialoag";

const Checkin = () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header type="list" />
      <div className="checkin">
        <div className="checkDiv">
          <div className="checkInUserDetails">
            <div className="checkInUserDetails_head">
              <div className="checkBoxIner">
                <div className="checkInUserDetails_boxNum">1</div>
                <div className="checkInUserDetails_boxtitle">
                  Enter your details
                </div>
              </div>
              {!open && (
                <div className="checkInUserDetails_box">
                  <div className="checkInUserDetails_boxInner">
                    <div className="check-12">
                      We will use these details to share your booking
                      information
                    </div>
                    <div className="check-13">
                      <div className="textInput__Cont">
                        <div className="textInput__ContTitle">
                          <span>Full Name</span>
                        </div>
                        <input className="textInput__input" type="text" id="user.name" value={user.name} />
                      </div>
                    </div>
                    <div className="check-13">
                      <div className="textInput__Cont">
                        <div className="textInput__ContTitle">
                          <span>Email Address</span>
                        </div>
                        <input className="textInput__input" type="email" value={user.email}/>
                      </div>
                    </div>
                    <div className="check-13">
                      <div className="textInput__Cont">
                        <div className="textInput__ContTitle">
                          <span>Mobile Number</span>
                        </div>
                        <input className="textInput__input" type="text" value={user.phone}/>
                      </div>
                    </div>
                  </div>
                  <div className="check-14" onClick={() => setOpen(!open)}>
                    <button className="check-15">
                      <span>Continue</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="checkInUserDetails_head2">
              <div className="checkBoxIner">
                <div className="checkInUserDetails_boxNum">2</div>
                <div className="checkInUserDetails_boxtitle">
                  Complete your booking
                </div>
              </div>
              {open && (
                <>
                  <div className="check-16">
                    <div className="check-17">
                      <div className="check-18">
                        <div className="check-19">Pay At Hotel</div>
                      </div>
                    </div>
                    <div className="check-20">
                      <div className="check-21">
                        <div className="check-22">
                          <span> No payment needed today</span>
                        </div>
                        <div className="check-23">
                          <span>
                            We will confirm your stay without any charge. Pay
                            directly at the hotel during your stay.
                          </span>
                        </div>
                        <div
                          className="check-24"
                          onClick={() => setConfirmOpen(true)}
                        >
                          <button className="check-15">
                            <span>Book Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <div className="checkInHotelDetails">blahotels</div> */}
        </div>
      </div>
      <Dialoag open={confirmOpen}  setOpen={setConfirmOpen}/>
    </>
  );
};

export default Checkin;
