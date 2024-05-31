import React from 'react';





const VideoSlider = () => {


  const videoUrls = [
    'https://www.youtube.com/embed/Way9Dexny3w?si=-u3BGWwpLtxaTSHx',
    'https://www.youtube.com/embed/d9MyW72ELq0?si=9hTF6q4q4JwSL1Os',
    'https://www.youtube.com/embed/sFXGrTng0gQ?si=3p5PiZtURipr3XDD',
    'https://www.youtube.com/embed/zSWdZVtXT7E?si=EGdZ0f8PjjSylO8E',
    'https://www.youtube.com/embed/uYPbbksJxIg?si=P5Ub8isCSa1TqbDt',
    'https://www.youtube.com/embed/ej3ioOneTy8?si=_fNGvf40eh4u-ApJ',
  ];

  return (
    <div style={{ 
      maxWidth: '100%', 
      margin: 'auto',
      overflow: 'hidden',
    }}>
      <div style={{ 
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        padding: '16px', // Assuming theme.spacing(2) equals 16px
      }}>
        {videoUrls.map((url, index) => (
          <div key={index} style={{ 
            flex: '0 0 auto',
            padding: '16px', // Assuming theme.spacing(2) equals 16px
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // Adjust background color as needed
            width: '560px', 
            height: '315px', 
            scrollSnapAlign: 'start',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for depth effect
            borderRadius: '8px', // Optional: add rounded corners
          }}>
            <div style={{ 
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
