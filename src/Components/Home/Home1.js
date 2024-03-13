import React from "react";
import Typewriter from "typewriter-effect";
import background from "../../Assets/Background.jpg";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Site_Logo.png";
import './Home1.css'
import MultiActionAreaCard from "./MultiActionAreaCard";
import VideoSlider from "./VideoSlider";
import { useEffect } from "react";

const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const navigate = useNavigate()
  const book=()=>
  {
    navigate('/Login')
  }
    return (
<>
      <body style={{ backgroundImage: `url(${background})` }}>
        <div className="cont">
          
        <h1 class="tag">Hi There! 👋🏻</h1>
          <h1 class="tagg">Welcome To Movie Pass</h1>
          <h1 className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "Where Every Frame Tells a Story",
                  "Unlock Unlimited Entertainment",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div class="brandd">
          <img src={Logo} />
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="cont1">
        <h1 class="taggg">Your Only Movie Booking Site !</h1>
        <h1 class="content">
            Discover cinematic excellence brought to your nearest.
            <br></br>    Movie Pass delivers award-winning films to your nearest
            theaters, ensuring an unforgettable movie experience every time.
            <br></br> Indulge in luxury seating and experience the latest in
            insane screening technologies with Movie Pass.
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="tagggg">Technologies We Use!</h1>
        </div>
        <br></br>
        <MultiActionAreaCard/>
        <br></br>
        <h1 className="tagggg">Trending Teasers: Get a Glimpse</h1>
  
            <VideoSlider/>
        <h1 className="next">Log In To Continue</h1>
            <br></br>
            <div className="center">

            <div class="box"><button onClick={book}>Click Here!</button></div>
            </div>

           
        </body>
        
      
</>
    )
}


export default Home1