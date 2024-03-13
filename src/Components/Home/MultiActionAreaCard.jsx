import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, styled } from '@mui/material';
import mov1 from '../../Assets/t1.jpg'
import mov2 from '../../Assets/t3.png'
import mov3 from '../../Assets/t5.jpg'
import mov4 from '../../Assets/t6.jpg'


const StyledCard = styled(Card)({
  maxWidth: 250,
  maxHeight: 400,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  
  border: '3px solid',
  borderBottom: 'none',
  borderImage: 'linear-gradient(to bottom, rgb(251, 86, 86) 0%, gray 10%) 1',
  borderBottom: '3px solid rgb(251, 86, 86)',
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const CenteredGridContainer = styled(Grid)({
  padding: '0 16px', 
  marginLeft: '40px', 
});

const Title = styled(Typography)({
    color: 'rgb(251, 86, 86)',
    fontWeight: 'bold',
  });
  
  const Content = styled(Typography)({
    color: 'gray',
  });
  
  export default function MultiActionAreaCard() {
    return (
      <CenteredGridContainer container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={mov1}
              alt="Dolby Atmos"
            />
            <CardContent>
              <Title gutterBottom variant="h5" component="div">
                Dolby Atmos
              </Title>
              <Content variant="body2" color="text.secondary">
                Dolby Atmos delivers captivating, multidimensional sound that places and moves audio anywhere in the room.
              </Content>
            </CardContent>
          </StyledCard>
        </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={mov2}
              alt="Epiq"
            />
            <CardContent>
              <Title gutterBottom variant="h5" component="div">
                Epiq
              </Title>
              <Content variant="body2" color="text.secondary">
                Epiq delivers high-quality audio and video experiences with advanced technology and superior picture quality.
              </Content>
            </CardContent>
          </StyledCard>
        </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={mov3}
              alt="IMAX"
            />
            <CardContent>
              <Title gutterBottom variant="h5" component="div">
                IMAX
              </Title>
              <Content variant="body2" color="text.secondary">
                IMAX provides immersive, larger-than-life cinematic experiences with stunning visuals and sound.
              </Content>
            </CardContent>
          </StyledCard>
        </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={mov4}
              alt="Laser"
            />
            <CardContent>
              <Title gutterBottom variant="h5" component="div">
                Laser
              </Title>
              <Content variant="body2" color="text.secondary">
                Laser projection technology offers enhanced brightness, color accuracy, and image clarity for an exceptional viewing experience.
              </Content>
            </CardContent>
          </StyledCard>
        </Grid>
      </CenteredGridContainer>
    );
  }
