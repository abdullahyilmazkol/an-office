// src/components/AwardCard/AwardCard.jsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

const AwardCard = ({ award }) => {
  return (
    <Card sx={{ maxWidth: 400, height: '100%', m: 'auto', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ flex: '1 0 auto' }}>
        <CardMedia
          component="img"
          height="150"
          image={award.image}
          alt={award.title}
          sx={{ objectFit: 'cover' }} // Resmin boyutlandırılması
        />
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div">
            {award.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {award.year}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {award.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AwardCard;
