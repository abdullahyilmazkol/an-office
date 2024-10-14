// src/components/AwardsPage/AwardsPage.jsx

import React from 'react';
import { Grid, Typography, Container, Grow } from '@mui/material';
import AwardCard from '../Components/AwardCard';
import awards from '../data/awardsData';

const Awards = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <br></br>
      <Typography variant="h4" align="center" gutterBottom>
        Awards
      </Typography>
      <Grid container spacing={4}>
        {awards.map((award, index) => (
          <Grow in={true} timeout={500 * (index + 1)} key={award.id}>
            <Grid item xs={12} sm={6} md={4} sx={{ pointerEvents: 'none' }}>
              <AwardCard award={award} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Container>
  );
};

export default Awards;
