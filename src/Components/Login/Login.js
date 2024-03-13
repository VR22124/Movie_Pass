import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgi from '../../Assets/Background.jpg';
import log1 from '../../Assets/Site_Logo.png';
import './Login.css';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [severity, setSeverity] = React.useState("success");

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            setAlertMessage('Please fill up all the fields to login.');
            setSeverity("error");
            setSnackbarOpen(true);
        } else {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    const foundUser = response.data.find(user => user.email === email);
                    if (foundUser) {
                        setAlertMessage("Login Successful Redirecting ...");
                        setSeverity("success");
                        setSnackbarOpen(true);
                        setTimeout(() => {
                            navigate('/BookTickets');
                        }, 4000);
                    } else {
                        setAlertMessage('Email not found. Please Sign up.');
                        setSeverity("error");
                        setSnackbarOpen(true);
                        setTimeout(() => {
                            navigate('/SignUp');
                        }, 4000);
                    }
                });
        }
    };

    const redirectToSignUp = () => {
        navigate('/SignUp');
    };
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div>
            <body style={{ backgroundImage: `url(${bgi})` }}>
                <br />
                <br />
                <br />
                <br />
                <center>
                    <div className="form">
                        <img src={log1} alt="logo" />
                        <h1>Login</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email Here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password Here"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button
                            className="btnn"
                            style={{ color: "lightgray", backgroundColor: "rgba(256,86,86)", fontWeight: "bold" }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "gray"}
                            onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                            onClick={handleLogin}
                        >
                            LOGIN
                        </button>
                        <p className="link">
                            Don't have an Account ? <br />
                            <button className="btnn" style={{ color: "aliceblue" }} onClick={redirectToSignUp}>Sign Up!</button>
                        </p>
                        <p className="ll">Log in with</p>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                        <div className="icons">
                            <a href="#"><i className="fab fa-google"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </center>
            </body>
            <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <MuiAlert onClose={handleCloseSnackbar} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {alertMessage}
    </MuiAlert>
</Snackbar>
        </div>
    );
};

export default Login;
