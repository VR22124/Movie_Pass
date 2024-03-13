import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PaymentForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state.Price;
  const totalTicket = location.state.count;
  const movieTitle = location.state.text;
  const selectedSeats = location.state.selectedSeats;
  const movieImage = location.state.image;
  const cartPrice=location.state.totalPrice;
  const Dayy=location.state.Date;
  const Show=location.state.Time;
  const { cartItems } = location.state;
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const cancelTransaction = () => {
    setSnackbarOpen(false); 
    navigate('/BookTickets');
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleConfirmPayment = () => {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expDate = document.getElementById('expDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (cardName && cardNumber && expDate && cvv) {
      
      if (cardNumber.length !== 16) {
        setErrorMessage("Card number should be 16 digits.");
        setSnackbarOpen(true);
      }

      
      else if (cvv.length !== 3) {
        setErrorMessage("CVV should be 3 digits.");
        setSnackbarOpen(true);
      }

      else {
        setSuccessMessage("Payment confirmed. Redirecting...");
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate('/Thankyou', {
            state: {
              totalPrice,
              totalTicket,
              movieTitle,
              selectedSeats,
              movieImage,
              cartItems,
              cartPrice,
              Dayy,
              Show
            }
          });
        }, 5000); 
      }
    } else {
      setErrorMessage("Please fill in all the fields.");
      setSnackbarOpen(true);
    }

    
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 4000);
  };

  return (
    <div>
<Box
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>Preview</Typography>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'box-shadow -200.5s ease', 
          height: '340px', 
          width: isHovered ? 'calc(280px + 700px)' : '280px', 
          padding: '10px',
          position: 'relative',
          overflow: 'hidden', 
        }}
      >
        <img
          src={movieImage}
          alt="Movie"
          style={{
            height: '100%',
            width: '280px', 
            objectFit: 'contain', 
            position: 'absolute',
            zIndex: 1, 
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${movieImage})`,
            backgroundSize: 'cover',
            opacity: isHovered ? 0.2 : 0, 
            transition: 'opacity 0.5s ease', 
            zIndex: 0, 
          }}
        />
        {isHovered && (
          <CardContent
            className="hoveredContent" 
            sx={{
              flex: 1,
              backgroundColor: 'transparent',
              padding: '20px',
              fontWeight: 'bold', 
              position: 'relative',
              zIndex: 2, 
            }}
          >
            {/* Wrap content with div with className */}
            <div className="hoveredContent">
              <Typography variant="h3" fontWeight="bold" color="rgb(251, 86, 86)" style={{marginLeft:'320px'}}>
                {movieTitle}
              </Typography>
              <br />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" color="gray" mt={2}>
                
                {Dayy}
                <br></br>
                {Show}
                <br></br>
                  Seat Type: Club ₹150
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="gray">
                  Seats: {selectedSeats.join(", ")}
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="gray">
  Ticket Price: ₹{totalPrice}
  {cartItems && cartItems.length > 0 && (
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - {item.quantity}x - ₹{item.totalPrice}
        </li>
      ))}
    </ul>
  )}
</Typography>
              </Box>
            </div>
          </CardContent>
        )}
      </Card>
    </Box>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '10px' }}>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h6>Expiry Date</h6>
              <TextField
              
                required
                id="expDate"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                type="date" 
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                type='password'
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" required />}
                label="Remember credit card details for next time"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Total Price: ₹{totalPrice + cartPrice}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={handleConfirmPayment}>
                  Confirm Payment
                </Button>
                <Button variant="contained" style={{ backgroundColor: 'rgb(251, 86, 86)', color: 'white', marginLeft: '10px' }} onClick={cancelTransaction}>
                  Cancel Payment
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={8000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}style={{paddingBottom:'50px'}}>
        <Alert onClose={handleCloseSnackbar} severity={successMessage ? "success" : "error"}>
          {successMessage ? successMessage : errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PaymentForm;