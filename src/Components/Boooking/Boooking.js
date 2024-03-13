import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Boooking.css";
import { useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Boooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, text } = location.state;
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [missingSelection, setMissingSelection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function changecolor(e) {
    if (e.target.className !== "row") {
      const seatName = e.target.innerText;
      if (!selectedSeats.includes(seatName)) {
        setSelectedSeats([...selectedSeats, seatName]);
        setCount(count + 1);
        setPrice(Price + 150);
        e.target.style.background = "rgb(251, 86, 86)";
      } else {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
        setCount(count - 1);
        setPrice(Price - 150);
        e.target.style.background = "darkgray";
      }
    }
  }
  const changeDateColor = (day, date) => {
    const currentDate = new Date();
    
   
  
    let formattedDate = "";
  
    switch (day) {
      case "Mon":
        formattedDate = `Mon ${4} Mar`;
        break;
      case "Tue":
        formattedDate = `Tue ${4 + 1} Mar`;
        break;
      case "Wed":
        formattedDate = `Wed ${4 + 2} Mar`;
        break;
      default:
        break;
    }
  
    if (selectedDate === formattedDate) {
      setSelectedDate(null);
    } else {
      setSelectedDate(formattedDate);
    }
  };
  const changeTimeColor = (time) => {
    if (selectedTime === time) {
      // If the clicked time is already selected, deselect it
      setSelectedTime(null);
    } else {
      // Otherwise, select the clicked time and update the color
      setSelectedTime(time);
    }
  };
  const handleYesClick = () => {
    if (count === 0) {
      setMissingSelection("seats");
    } else if (!selectedDate || !selectedTime) {
      setMissingSelection("date and time");
    } else {
      navigate("/Food", {
        state: {
          Price,
          text,
          count,
          selectedSeats,
          image,
          selectedDate,
          selectedTime: `${selectedTime} IMAX`
        },
      });
    }
  };
  const handleCloseSnackbar = () => {
    setMissingSelection(null);
  };

  const print=selectedTime+" IMAX"
  return (
    <>
      <body1>
        <div className="movie-screen">
          <h1>{text}</h1>
          <img src={image} alt="screen" />
          <br></br>
          <button
            className="custom-button back-button"
            onClick={() => navigate("/BookTickets")}
          >
            Back
          </button>
        </div>
        <div className="foor">
          <div
            className="movie-dates"
            style={{
              marginLeft: "50px",
              width: "calc(55px * 3 + 40px)",
              height: "65px",
            }}
          >
           <button
  className={`movie-running-date ${
    selectedDate === "Mon 04 Mar" ? "selected" : ""
  }`}
  onClick={() => changeDateColor("Mon", "04 Mar")}
  style={{
    background:
      selectedDate === "Mon 04 Mar" ? "rgba(256, 86, 86)" : "none",
  }}
>
              <div className="bordered-date">
                <p>
                  Mon
                  <br></br>
                  04
                  <br></br>
                  Mar
                </p>
              </div>
            </button>
            <div style={{ marginRight: "10px" }}></div>
            <button
  className={`movie-running-date ${
    selectedDate === "Tue 05 Mar" ? "selected" : ""
  }`}
  onClick={() => changeDateColor("Tue", "05 Mar")}
  style={{
    background:
      selectedDate === "Tue 05 Mar" ? "rgba(256, 86, 86)" : "none",
  }}
>
              <div className="bordered-date">
                <p>
                  Tue
                  <br></br>
                  05
                  <br></br>
                  Mar
                </p>
              </div>
            </button>
            <div style={{ marginRight: "10px" }}></div>
            <button
  className={`movie-running-date ${
    selectedDate === "Wed 06 Mar" ? "selected" : ""
  }`}
  onClick={() => changeDateColor("Wed", "06 Mar")}
  style={{
    background:
      selectedDate === "Wed 06 Mar" ? "rgba(256, 86, 86)" : "none",
  }}
>
              <div className="bordered-date">
                <p>
                  Wed
                  <br></br>
                  06
                  <br></br>
                  Mar
                </p>
              </div>
            </button>
            <button
              className={`show-time ${
                selectedTime === "11:00 AM" ? "selected" : ""
              }`}
              onClick={() => changeTimeColor("11:00 AM")}
              style={{
                background:
                  selectedTime === "11:00 AM" ? "rgba(256, 86, 86)" : "none",
                marginLeft: "290px",
              }}
            >
              11:00 AM
              <br></br>
              IMAX
            </button>
            <button
              className={`show-time ${
                selectedTime === "2:00 PM" ? "selected" : ""
              }`}
              onClick={() => changeTimeColor("2:00 PM")}
              style={{
                background:
                  selectedTime === "2:00 PM" ? "rgba(256, 86, 86)" : "none",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              2:00 PM
              <br></br>
              IMAX
            </button>
            <button
              className={`show-time ${
                selectedTime === "7:00 PM" ? "selected" : ""
              }`}
              onClick={() => changeTimeColor("7:00 PM")}
              style={{
                background:
                  selectedTime === "7:00 PM" ? "rgba(256, 86, 86)" : "none",
                marginleft: "40px",
              }}
            >
              7:00 PM
              <br></br>
              IMAX
            </button>
          </div>
          <br></br>

          <ul className="showcase">
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Available</small>
            </li>
            <br></br>
          </ul>
          <h3 style={{ paddingLeft: "260px" }}>Club :₹150 </h3>
          <br></br>

          <div className="container">
            <div className="row-container">
              <div onClick={changecolor} className="row">
                <div className="seat">A1</div>
                <div className="seat">A2</div>
                <div className="seat">A3</div>
                <div className="seat">A4</div>
                <div className="seat">A5</div>
                <div className="seat">A6</div>
                <div className="seat">A7</div>
                <div className="seat">A8</div>
                <div className="seat">A9</div>
                <div className="seat">A10</div>
                <div className="seat">A11</div>
                <div className="seat">A12</div>
                <div className="seat">A13</div>
                <div className="seat">A14</div>
                <div className="seat">A15</div>
                <div className="seat">A16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">B1</div>
                <div className="seat">B2</div>
                <div className="seat">B3</div>
                <div className="seat ">B4</div>
                <div className="seat ">B5</div>
                <div className="seat">B6</div>
                <div className="seat">B7</div>
                <div className="seat">B8</div>
                <div className="seat">B9</div>
                <div className="seat">B10</div>
                <div className="seat">B11</div>
                <div className="seat">B12</div>
                <div className="seat">B13</div>
                <div className="seat">B14</div>
                <div className="seat">B15</div>
                <div className="seat">B16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">C1</div>
                <div className="seat">C2</div>
                <div className="seat">C3</div>
                <div className="seat">C4</div>
                <div className="seat">C5</div>
                <div className="seat">C6</div>
                <div className="seat ">C7</div>
                <div className="seat ">C8</div>
                <div className="seat ">C9</div>
                <div className="seat ">C10</div>
                <div className="seat ">C11</div>
                <div className="seat ">C12</div>
                <div className="seat ">C13</div>
                <div className="seat ">C14</div>
                <div className="seat ">C15</div>
                <div className="seat ">C16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">D1</div>
                <div className="seat">D2</div>
                <div className="seat">D3</div>
                <div className="seat">D4</div>
                <div className="seat">D5</div>
                <div className="seat">D6</div>
                <div className="seat">D7</div>
                <div className="seat">D8</div>
                <div className="seat">D9</div>
                <div className="seat">D10</div>
                <div className="seat">D11</div>
                <div className="seat">D12</div>
                <div className="seat">D13</div>
                <div className="seat">D14</div>
                <div className="seat">D15</div>
                <div className="seat">D16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">E1</div>
                <div className="seat">E2</div>
                <div className="seat">E3</div>
                <div className="seat">E4</div>
                <div className="seat ">E5</div>
                <div className="seat">E6</div>
                <div className="seat">E7</div>
                <div className="seat">E8</div>
                <div className="seat">E9</div>
                <div className="seat">E10</div>
                <div className="seat">E11</div>
                <div className="seat">E12</div>
                <div className="seat">E13</div>
                <div className="seat">E14</div>
                <div className="seat">E15</div>
                <div className="seat">E16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">F1</div>
                <div className="seat">F2</div>
                <div className="seat">F3</div>
                <div className="seat">F4</div>
                <div className="seat">F5</div>
                <div className="seat">F6</div>
                <div className="seat">F7</div>
                <div className="seat">F8</div>
                <div className="seat">F9</div>
                <div className="seat">F10</div>
                <div className="seat">F11</div>
                <div className="seat">F12</div>
                <div className="seat">F13</div>
                <div className="seat">F14</div>
                <div className="seat">F15</div>
                <div className="seat">F16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">G1</div>
                <div className="seat">G2</div>
                <div className="seat">G3</div>
                <div className="seat">G4</div>
                <div className="seat ">G5</div>
                <div className="seat ">G6</div>
                <div className="seat ">G7</div>
                <div className="seat">G8</div>
                <div className="seat">G9</div>
                <div className="seat">G10</div>
                <div className="seat">G11</div>
                <div className="seat">G12</div>
                <div className="seat">G13</div>
                <div className="seat">G14</div>
                <div className="seat">G15</div>
                <div className="seat">G16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">H1</div>
                <div className="seat">H2</div>
                <div className="seat">H3</div>
                <div className="seat">H4</div>
                <div className="seat ">H5</div>
                <div className="seat ">H6</div>
                <div className="seat ">H7</div>
                <div className="seat">H8</div>
                <div className="seat">H9</div>
                <div className="seat">H10</div>
                <div className="seat">H11</div>
                <div className="seat">H12</div>
                <div className="seat">H13</div>
                <div className="seat">H14</div>
                <div className="seat">H15</div>
                <div className="seat">H16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">I1</div>
                <div className="seat">I2</div>
                <div className="seat">I3</div>
                <div className="seat">I4</div>
                <div className="seat ">I5</div>
                <div className="seat ">I6</div>
                <div className="seat ">I7</div>
                <div className="seat">I8</div>
                <div className="seat">I9</div>
                <div className="seat">I10</div>
                <div className="seat">I11</div>
                <div className="seat">I12</div>
                <div className="seat">I13</div>
                <div className="seat">I14</div>
                <div className="seat">I15</div>
                <div className="seat">I16</div>
              </div>
              <div onClick={changecolor} className="row">
                <div className="seat">J1</div>
                <div className="seat">J2</div>
                <div className="seat">J3</div>
                <div className="seat">J4</div>
                <div className="seat ">J5</div>
                <div className="seat ">J6</div>
                <div className="seat ">J7</div>
                <div className="seat">J8</div>
                <div className="seat">J9</div>
                <div className="seat">J10</div>
                <div className="seat">J11</div>
                <div className="seat">J12</div>
                <div className="seat">J13</div>
                <div className="seat">J14</div>
                <div className="seat">J15</div>
                <div className="seat">J16</div>
              </div>
              <h4 className="subtitle"> Screen This Way!</h4>

              <div className="text-wrapper">
                <p className="text">
                Date: {selectedDate}
                <br></br>
                Show:{print}
                <br></br>
                  Total Seats <span id="count">{count}</span>
                </p>
                <p className="text">
                  <br></br>
                  <br></br>
                  Total Price ₹<span id="total">{Price}</span>
                </p>
              </div>
              <div className="doo">
                <p className="text">
                  Selected Seats: {selectedSeats.join(", ")}
                  
                </p>
                <br></br>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <button className="custom-button" onClick={handleYesClick}>
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snackbar
          open={!!missingSelection}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          style={{ marginBottom: "20px" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="error"
          >
            {missingSelection && `Please select ${missingSelection}.`}
          </MuiAlert>
        </Snackbar>
      </body1>
    </>
  );
};

export default Boooking;
