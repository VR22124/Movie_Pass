import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import QR from "../../Assets/QR.png";
import html2canvas from "html2canvas";
import logo from "../../Assets/Site_Logo.png";
import { useEffect } from "react";

const TransactionSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    totalPrice,
    totalTicket,
    movieTitle,
    selectedSeats,
    movieImage,
    cartItems,
    
  } = location.state;
  const bookingID = "#GHQ122Z24";
  const Day=location.state.Dayy
  const Shoow=location.state.Show

  const cardRef = useRef();

  const downloadTicket = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "Ticket.jpg";
      link.href = canvas.toDataURL("image/jpg");
      link.click();
    });
  };

  const goHome = () => {
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "50px", 
        minHeight: "95vh",
      }}
    >
      <Typography variant="h2" gutterBottom style={{ color: "rgb(256,86,86)" }}>
        Your Booking
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
        ref={cardRef}
      >
        <Card
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          flex: "0 0 auto",
          width: "200px",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={movieImage}
          alt="Movie"
          style={{ width: "100%" }}
        />

        {/* Background Overlay */}
        <div
          style={{
            
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${movieImage})`,
            
          }}
        ></div>
      </div>
      <CardContent style={{ flex: "1 1 auto" }}>
        {/* Movie details */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="rgb(251, 86, 86)"
          >
            {movieTitle}
          </Typography>
          <Typography variant="body1">Date:{Day}</Typography>
          <Typography variant="body1">Show:{Shoow}</Typography>
          <Typography variant="body1">Seat Type: Club ₹150</Typography>

          <Typography variant="body1">
            Seats: {selectedSeats.join(", ")}
          </Typography>
          <Typography variant="body1">
            Total Price: ₹{totalPrice}
          </Typography>
          <Typography variant="body1">
            Total Tickets: {totalTicket}
          </Typography>
        </div>

        {cartItems.length > 0 && (
          <div>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="rgb(251, 86, 86)"
            >
              Extras
            </Typography>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity}x - ₹{item.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <img
          src={logo}
          alt="QR Code"
          style={{
            width: "180px",
            height: "100px",
            paddingRight: "10px",
            paddingBottom: "0px",
          }}
        />
        <img
          src={QR}
          alt="QR Code"
          style={{ width: "120px", height: "120px" }}
        />
        <Typography variant="body3" style={{ marginTop: "-5px" }}>
          {bookingID}
        </Typography>
      </div>
    </Card>
      </div>
      <Button
        variant="contained"
        onClick={downloadTicket}
        style={{ marginTop: "20px" }}
      >
        Download Ticket
      </Button>
      <Button
        variant="contained"
        onClick={goHome}
        style={{ marginTop: "20px" }}
      >
        Return Home
      </Button>
      <h1 style={{ marginTop: "20px" }}>Terms and Conditions</h1>
      <div style={{ maxWidth: "1000px", width: "100%", marginTop: "20px" }}>
        <Card>
          <CardContent style={{ textAlign: "left" }}>
            <Typography
              variant="body1"
              style={{
                fontWeight: "500",
                color: "rgb(256,86,86)",
                fontSize: "larger",
              }}
            >
              <p>
                <strong>1. Ticket Validity:</strong> Valid only for specified
                date, time, and seat/section.
              </p>
              <p>
                <strong>
                  2. Entry may be denied if ticket is damaged or altered.
                </strong>
              </p>
              <p>
                <strong>3. Refund Policy:</strong> Refunds subject to
                organizer's policies. Check cancellation terms during booking.
              </p>
              <p>
                <strong>4. Entry Requirements:</strong> Bring valid ID for
                verification. Entry may be denied without proper identification.
              </p>
              <p>
                <strong>5. Code of Conduct:</strong> Follow venue rules,
                including behavior guidelines and restrictions on
                photography/recording.
              </p>
              <p>
                <strong>Liability Disclaimer:</strong> Movie Pass acts as
                intermediary. Not liable for event content or injuries incurred
                during event.
              </p>
              <p>
                <strong>6. Entry Time:</strong> Please arrive at the venue at
                least 15 minutes before the showtime for smooth entry and seat
                allocation. Latecomers may not be accommodated until a suitable
                break in the performance.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionSuccessPage;
