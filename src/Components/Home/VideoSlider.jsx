import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%', 
    margin: 'auto',
    overflow: 'hidden',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: theme.spacing(2),
  },
  paper: {
    flex: '0 0 auto',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '560px', 
    height: '315px', 
    scrollSnapAlign: 'start',
  },
  iframeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const VideoSlider = () => {
  const classes = useStyles();

  const videoUrls = [
    'https://www.youtube.com/embed/Way9Dexny3w?si=-u3BGWwpLtxaTSHx',
    'https://www.youtube.com/embed/d9MyW72ELq0?si=9hTF6q4q4JwSL1Os',
    'https://www.youtube.com/embed/sFXGrTng0gQ?si=3p5PiZtURipr3XDD',
    'https://www.youtube.com/embed/zSWdZVtXT7E?si=EGdZ0f8PjjSylO8E',
    'https://www.youtube.com/embed/uYPbbksJxIg?si=P5Ub8isCSa1TqbDt',
    'https://www.youtube.com/embed/ej3ioOneTy8?si=_fNGvf40eh4u-ApJ',
  ];

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        {videoUrls.map((url, index) => (
          <Paper key={index} className={classes.paper}>
            <div className={classes.iframeContainer}>
              <iframe
                title={`Video ${index + 1}`}
                src={url}
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
