import React from 'react'
import logo from '../../Assets/Site_Logo.png'
import './AboutUs.css'
import { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <section class="about">
            <h1>About Us</h1>

            <div class="about-info">
                <div class="about-img">
                    <img src={logo}></img>

                </div>
                <div>
                    <p> Welcome to Movie Pass, your premier destination for effortless movie ticket booking! We're dedicated to bringing all formats and the latest cinema technologies right to your nearest theater.
                        With Movie Pass, enjoy a seamless moviegoing experience like never before. Our user-friendly platform ensures easy access to a diverse range of films, catering to every taste.
                        Say goodbye to long queues and hello to instant access to the latest blockbusters and timeless classics. Movie Pass simplifies the ticket booking process, saving you time and hassle.
                        
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
