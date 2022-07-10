import "../list/list.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Gethotels = () => {
  //   const location = useLocation();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { data } = useFetch("/hotels/");

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (destination !== "") {
      const destinationLower = destination.toLowerCase();
      // console.log(destinationLower);
      dispatch({
        type: "NEW_SEARCH",
        payload: { destinationLower, dates, options },
      });
      navigate("/hotels", { state: { destination, dates, options } });
    } else {
      toast("Enter the destination!");
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            {/* <div className="lsItem"> */}
            {/* <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    // onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    // onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div> */}
            {/* <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    // min={1}
                    value={options.adult}
                    className="lsOptionInput"
                    // placeholder={options.adult}
                    onChange={handleChange}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    // min={0}
                    className="lsOptionInput"
                    value={options.children}
                    // placeholder={options.children}
                    onChange={handleChange}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    // min={1}
                    value={options.room}
                    className="lsOptionInput"
                    // placeholder={options.room}
                    onChange={handleChange}
                  />
                </div> */}
            {/* </div> */}
            {/* </div> */}
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            <>
              {data.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>
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

export default Gethotels;
