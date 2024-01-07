import React, { useContext } from "react";
import "./hotel.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { data } = useFetch(`/hotels/find/${id}`);
  const navigate = useNavigate();
  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    // console.log(data.photos.length);
    let newSlideNumber;
    // console.log(direction);
    if (direction === "l") {
      newSlideNumber =
        slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <LazyLoadImage
                effect="blur"
                src={data.photos[slideNumber]}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          {/* <button className="bookNow">Reserve or Book Now!</button> */}
          <div className="hotelTitle">{data.name}</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          {/* <span className="hotelDistance">
            Excellent location – {data.distance} from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a
            free airport taxi
          </span> */}
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <LazyLoadImage
                  effect="blur"
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <div className="hotelDetailsDesc" style={{ margin: "25px 0px" }}>
                <div className="hotelTitle">Description</div>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsAmen">
                <div className="hotelTitle">Amenities</div>
                <div className="hotelAmenties">
                  {data.amenties && (
                    <>
                      {/* {data.amenties} */}
                      {(expanded
                        ? data.amenties
                        : data.amenties.slice(0, 6)
                      ).map((ele, i) => (
                        <div className="hotelPerAmenties" key={i}>
                          <span>{ele}</span>
                        </div>
                      ))}
                      <div
                        style={{
                          margin: "8px 5px",
                          fontSize: "16px",
                          color: "#171537",
                          fontWeight: "600",
                        }}
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "Show Less" : "Show More"}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* <div className="hotelDetailsAmen">
                <div className="hotelTitle">Choose your room</div>
                <div className="hotelAmenties"></div>
              </div> */}
            </div>
            <div className="hotelDetailsPrice">
              <h1>
                <b>₹{days * data.cheapestPrice * options.room}</b>
                <p style={{ fontSize: "12px" }}>inclusive of all taxes</p>
              </h1>
              {/* <div style={{display:"flex",justifyContent:"space-between"}}> */}

              <div>
                <h4>
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </h4>
                <span> Perfect for a {days}-night stay!</span>
              </div>
              <div>
                <h4>
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </h4>
              </div>
              {/* </div> */}
              {/* <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span> */}
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>

      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
