import React, { useEffect } from "react";

import "./Booking.css";
import mov1 from "../../Assets/image1.jpg";
import mov2 from "../../Assets/image2.jpg";
import mov3 from "../../Assets/image3.jpg";
import mov4 from "../../Assets/image4.jpg";
import mov5 from "../../Assets/image5.jpg";
import mov6 from "../../Assets/image6.jpg";
import mov7 from "../../Assets/image7.jpg";
import mov8 from "../../Assets/image8.jpg";
import mov9 from "../../Assets/ironman1.jpg";
import mov10 from "../../Assets/ironman2.jpg";
import mov11 from "../../Assets/ironman3.jpg";
import mov12 from "../../Assets/thebatman.jpg";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  const handleClick = (image, text) => {
    navigate("/Seats", { state: { image, text } });
    
  };


  return (
    <div className="booking-container">
      <h1>Now Showing</h1>
      <div className="row">
        <div className="column">
          <img src={mov1} alt="Movie 1" className="movie-image" />
          <div className="overlay">
            <h2>The GodFather</h2>
            <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>
            <button onClick={() => handleClick(mov1, "The GodFather")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov2} alt="Movie 2" className="movie-image" />
          <div className="overlay">
            <h2>Dune</h2>
            <p>A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.</p>
            <button onClick={() => handleClick(mov2, "Dune")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov3} alt="Movie 3" className="movie-image" />
          <div className="overlay">
            <h2>Titanic</h2>
            <p>A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.</p>
            <button onClick={() => handleClick(mov3, "Titanic")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov4} alt="Movie 4" className="movie-image" />
          <div className="overlay">
            <h2>Godzilla X Kong -The new Empire</h2>
            <p>Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.
</p>
            <button onClick={() => handleClick(mov4, "Godzilla X Kong -The new Empire")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <img src={mov5} alt="Movie 5" className="movie-image" />
          <div className="overlay">
            <h2>The Wolf of Wall Street</h2>
            <p>Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.</p>
            <button onClick={() => handleClick(mov5, "The Wolf of Wall Street")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov6} alt="Movie 6" className="movie-image" />
          <div className="overlay">
            <h2>The Martian</h2>
            <p>An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.</p>
            <button onClick={() => handleClick(mov6, "The Martian")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov7} alt="Movie 7" className="movie-image" />
          <div className="overlay">
            <h2>Oppenheimer</h2>
            <p> The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.</p>
            <button onClick={() => handleClick(mov7, "Oppenheimer")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov8} alt="Movie 8" className="movie-image" />
          <div className="overlay">
            <h2>2012</h2>
            <p>A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.</p>
            <button onClick={() => handleClick(mov8, "2012")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={mov9} alt="Movie 5" className="movie-image" />
          <div className="overlay">
            <h2>Iron Man</h2>
            <p> After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</p>
            <button onClick={() => handleClick(mov9, "Iron Man")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov10} alt="Movie 6" className="movie-image" />
          <div className="overlay">
            <h2>Iron man 2</h2>
            <p>With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.</p>
            <button onClick={() => handleClick(mov10, "Iron Man 2")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov11} alt="Movie 7" className="movie-image" />
          <div className="overlay">
            <h2>Iron Man 3</h2>
            <p>When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
            <button onClick={() => handleClick(mov11, "Iron Man 3")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>

        <div className="column">
          <img src={mov12} alt="Movie 8" className="movie-image" />
          <div className="overlay">
            <h2>The Batman</h2>
            <p>When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.</p>
            <button onClick={() => handleClick(mov12, "The Batman")} className="book-now-button">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <h1>Coming Soon !</h1>
      <ImageSlider/>
    </div>
  );
};

export default Booking;