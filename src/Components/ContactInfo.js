import React from 'react';
import {
  Box,
  Typography,

} from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material'




const ContactInfo = () => {
  return (

    <Box sx={{ pt: 3 }}>
      {/* İletişim Bilgileri ve Google Maps Iframe Yan Yana */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}>
    {/* Sol Taraf - İletişim Bilgileri */}
    <Box sx={{ flex: 2, pr: { md: 2 } }}>
      <Typography variant="h3" gutterBottom>
        Anoffice
      </Typography>
      {/* Adres */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body1">
          <strong>Adres:</strong> Osmanağa Mah. Kuşdili Cad. No:39/2, Kadıköy, İstanbul
        </Typography>
      </Box>
      {/* Telefon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Phone sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body1">
          <strong>Telefon:</strong> +90 506 880 88 22
        </Typography>
      </Box>
      {/* E-posta */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Email sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body1">
          <strong>E-posta:</strong> info@anoffice.com.tr
        </Typography>
      </Box>
    </Box>

        {/* Sağ Taraf - Google Maps Iframe */}
        <Box sx={{ flex: 2 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4584019.9937203!2d30.90447201304189!3d37.49797560582535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f27e7062d34f29d%3A0x2361cd99c45e97c0!2sAn%20Office%20Architecture!5e0!3m2!1str!2str!4v1727805460826!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </Box>
      </Box>


    </Box>
  );
};

export default ContactInfo;
