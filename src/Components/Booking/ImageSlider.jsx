import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardMedia, Typography } from '@material-ui/core';
import mov1 from "../../Assets/soon1.jpg";
import mov2 from "../../Assets/soon2.jpg";
import mov3 from "../../Assets/soon3.jpg";
import mov4 from "../../Assets/soon4.jpg";
import mov5 from "../../Assets/soon5.jpg";
import mov6 from "../../Assets/soon6.jpg";
import mov7 from "../../Assets/soon7.jpg";
import mov8 from "../../Assets/soon8.jpg";
import mov9 from "../../Assets/soon9.jpg";
import mov10 from "../../Assets/soon10.jpg";
import mov11 from "../../Assets/soon11.jpg";
import mov12 from "../../Assets/soon12.jpg";
import mov13 from "../../Assets/soon13.jpg";
import mov14 from "../../Assets/soon14.jpg";
import mov15 from "../../Assets/soon15.jpg";
import mov16 from "../../Assets/soon16.jpg";
import mov17 from "../../Assets/soon17.jpg";
import mov18 from "../../Assets/soon18.jpg";
import mov19 from "../../Assets/soon19.jpeg";
import mov20 from "../../Assets/soon20.jpg";
import mov21 from "../../Assets/soon21.jpg";
import mov22 from "../../Assets/soon22.jpg";
import mov23 from "../../Assets/soon23.jpg";
import mov24 from "../../Assets/soon24.jpg";
import mov25 from "../../Assets/soon25.jpg";
import mov26 from "../../Assets/soon26.jpeg";
import mov27 from "../../Assets/soon27.jpg";
import mov28 from "../../Assets/soon28.jpg";
import mov29 from "../../Assets/soon29.jpg";
import mov30 from "../../Assets/soon30.jpg";
import mov31 from "../../Assets/soon31.jpg";
import mov32 from "../../Assets/soon32.jpg";
import mov33 from "../../Assets/soon33.jpg";
import mov34 from "../../Assets/soon34.jpg";
import mov35 from "../../Assets/soon35.jpg";
import mov36 from "../../Assets/soon36.jpg";
import mov37 from "../../Assets/soon37.jpg";
import mov38 from "../../Assets/soon38.jpg";
import mov39 from "../../Assets/soon39.jpg";
import mov40 from "../../Assets/soon40.jpg";
import mov41 from "../../Assets/soon41.jpg";
import mov42 from "../../Assets/soon42.jpg";
import mov43 from "../../Assets/soon43.jpg";
import mov44 from "../../Assets/soon44.jpg";
import mov45 from "../../Assets/soon45.jpg";
import mov46 from "../../Assets/soon46.jpg";
import mov47 from "../../Assets/soon47.jpg";
import mov48 from "../../Assets/soon48.jpg";
import mov49 from "../../Assets/soon49.jpg";
import mov50 from "../../Assets/soon50.jpg";
import mov51 from "../../Assets/soon51.jpg";
import mov52 from "../../Assets/soon52.jpg";
import mov53 from "../../Assets/soon53.jpg";
import mov54 from "../../Assets/soon54.jpg";
import mov55 from "../../Assets/soon55.jpg";
import mov56 from "../../Assets/soon56.jpg";
import mov57 from "../../Assets/soon57.jpg";
import mov58 from "../../Assets/soon58.jpg";
import mov59 from "../../Assets/soon59.jpg";
import mov60 from "../../Assets/soon60.jpg";
import mov61 from "../../Assets/soon61.jpg";
import mov62 from "../../Assets/soon62.jpg";
import mov63 from "../../Assets/soon63.jpg";
import mov64 from "../../Assets/soon64.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: 'auto',
    overflow: 'hidden',
  },
  sliderContainer: {
    marginBottom: theme.spacing(4),
  },
  sliderHeading: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  slider: {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: '100%',
  },
  card: {
    flex: '0 0 auto',
    width: 220, 
    height: 300, 
    margin: theme.spacing(0, 1),
    position: 'relative',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  cardMedia: {
    height: 300, 
    width: 220, 
    objectFit: 'cover', 
    borderRadius: 15, 
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 15, 
  },
}));

const ImageSlider = () => {
  const classes = useStyles();

  const genres = ['Horror', 'Action Thriller', 'Sci-Fi', 'Fantasy'];
  const images = [
    
    [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8, mov9, mov10, mov11, mov12, mov13, mov14, mov15, mov16],
    
    [mov17, mov18, mov19, mov20, mov21, mov22, mov23, mov24, mov25, mov26, mov27, mov28, mov29, mov30, mov31, mov32],
    
    [mov33, mov34, mov35, mov36, mov37, mov38, mov39, mov40, mov41, mov42, mov43, mov44, mov45, mov46, mov47, mov48],
    
    [mov49, mov50, mov51, mov52, mov53, mov54, mov55, mov56, mov57, mov58, mov59, mov60, mov61, mov62, mov63, mov64]
  ];

  
  const generateRandomDate = () => {
    const daysInMarch = Array.from({ length: 16 }, (_, i) => i + 1);
    const randomDay = daysInMarch[Math.floor(Math.random() * daysInMarch.length)];
    return `Mar ${randomDay}, 2024`;
  };

  return (
    <div className={classes.root}>
      {genres.map((genre, index) => (
        <div key={index} className={classes.sliderContainer}>
          <Typography variant="h2" className={classes.sliderHeading}>
            {genre}
          </Typography>
          <div className={classes.slider}>
            {images[index].map((image, index) => (
              <Paper key={index} className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={image}
                  title={`Image ${index + 1}`}
                />
                <div className={classes.cardContent}>
                  <Typography variant="body2" component="p">
                    Release Date: {generateRandomDate()}
                  </Typography>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
